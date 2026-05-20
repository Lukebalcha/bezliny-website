import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False, channel="chrome")
        context = await browser.new_context()
        page = await context.new_page()

        # Open the Wix site to find videos
        await page.goto("https://cooperatebezliny.wixsite.com/bezliny-cleaning-cor")
        print(">>> Page loading... waiting for content...")
        
        # Wait for page to fully load
        await page.wait_for_timeout(10000)
        
        # Look for video elements
        videos = await page.evaluate('''() => {
            const results = [];
            
            // Check for <video> tags
            document.querySelectorAll('video').forEach(v => {
                results.push({type: 'video-tag', src: v.src || v.currentSrc, poster: v.poster});
                v.querySelectorAll('source').forEach(s => {
                    results.push({type: 'video-source', src: s.src, srcType: s.type});
                });
            });
            
            // Check for iframes (YouTube/Vimeo embeds)
            document.querySelectorAll('iframe').forEach(f => {
                if (f.src && (f.src.includes('youtube') || f.src.includes('vimeo') || f.src.includes('video'))) {
                    results.push({type: 'iframe', src: f.src});
                }
            });
            
            // Check for wix video players
            document.querySelectorAll('[data-video-url], [data-src*="video"], [data-video-id]').forEach(el => {
                results.push({type: 'wix-video', url: el.getAttribute('data-video-url') || el.getAttribute('data-src') || el.getAttribute('data-video-id')});
            });

            // Check for background videos
            document.querySelectorAll('[id*="video"], [class*="video"]').forEach(el => {
                const src = el.getAttribute('src') || el.getAttribute('data-src') || '';
                if (src) results.push({type: 'bg-video', src: src});
            });
            
            // Look for wix video URLs in all elements
            const allHTML = document.body.innerHTML;
            const videoMatches = allHTML.match(/https:\/\/video\.wixstatic\.com[^"'\s]+/g) || [];
            videoMatches.forEach(url => results.push({type: 'wix-video-url', src: url}));
            
            return results;
        }''')
        
        print(f"\n>>> Found {len(videos)} video elements:")
        for v in videos:
            print(f"  {v}")
        
        # Scroll down to trigger lazy loading
        print("\n>>> Scrolling page to load lazy content...")
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
        await page.wait_for_timeout(5000)
        
        # Check again after scrolling
        videos2 = await page.evaluate('''() => {
            const results = [];
            document.querySelectorAll('video').forEach(v => {
                results.push({type: 'video-tag', src: v.src || v.currentSrc, poster: v.poster});
                v.querySelectorAll('source').forEach(s => {
                    results.push({type: 'video-source', src: s.src, srcType: s.type});
                });
            });
            document.querySelectorAll('iframe').forEach(f => {
                if (f.src) results.push({type: 'iframe', src: f.src});
            });
            const allHTML = document.body.innerHTML;
            const videoMatches = allHTML.match(/https:\/\/video\.wixstatic\.com[^"'\s<>]+/g) || [];
            videoMatches.forEach(url => results.push({type: 'wix-video-url', src: url}));
            return results;
        }''')
        
        print(f"\n>>> After scroll - found {len(videos2)} video elements:")
        for v in videos2:
            print(f"  {v}")

        # Also check for any video in network requests
        print("\n>>> Checking page source for video references...")
        content = await page.content()
        import re
        video_urls = re.findall(r'https://video\.wixstatic\.com[^"\'<>\s]+', content)
        video_urls += re.findall(r'https://[^"\'<>\s]*\.mp4[^"\'<>\s]*', content)
        video_urls = list(set(video_urls))
        print(f">>> Found {len(video_urls)} video URLs in page source:")
        for url in video_urls:
            print(f"  {url}")
        
        print("\n>>> Done! Press ENTER to close browser...")
        input()
        await browser.close()

asyncio.run(main())
