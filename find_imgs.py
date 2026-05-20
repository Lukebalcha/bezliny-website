from playwright.sync_api import sync_playwright
import re, time

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True)
    page = browser.new_page()
    
    # Try Lucid Bots - they have public images of their cleaning drone
    print("=== Lucid Bots ===")
    try:
        page.goto('https://www.lucidbots.com/products/sherpa', timeout=15000)
        time.sleep(3)
        imgs = page.query_selector_all('img')
        for img in imgs[:30]:
            src = img.get_attribute('src') or ''
            alt = img.get_attribute('alt') or ''
            if src and not src.startswith('data:') and len(src) > 10:
                print(f"{alt[:50]} | {src[:180]}")
    except Exception as e:
        print(f"Error: {e}")
    
    # Try searching Pixabay
    print("\n=== Pixabay drone facade ===")
    try:
        page.goto('https://pixabay.com/images/search/drone%20facade/', timeout=15000)
        time.sleep(3)
        imgs = page.query_selector_all('img[src*="pixabay"]')
        for img in imgs[:10]:
            src = img.get_attribute('src') or ''
            alt = img.get_attribute('alt') or ''
            if 'cdn.pixabay' in src:
                print(f"{alt[:50]} | {src[:180]}")
    except Exception as e:
        print(f"Error: {e}")

    # Try searching Pixabay for drone industrial
    print("\n=== Pixabay drone industrial ===")
    try:
        page.goto('https://pixabay.com/images/search/industrial%20drone/', timeout=15000)
        time.sleep(3)
        imgs = page.query_selector_all('img[src*="pixabay"]')
        for img in imgs[:10]:
            src = img.get_attribute('src') or ''
            alt = img.get_attribute('alt') or ''
            if 'cdn.pixabay' in src:
                print(f"{alt[:50]} | {src[:180]}")
    except Exception as e:
        print(f"Error: {e}")

    browser.close()
