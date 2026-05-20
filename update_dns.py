import asyncio
from playwright.async_api import async_playwright

GITHUB_PAGES_IPS = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153",
]
CNAME_VALUE = "lukebalcha.github.io"
DNS_URL = "https://www.wix.com/my-account/domains"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False, channel="chrome")
        context = await browser.new_context()
        page = await context.new_page()

        # Navigate to Wix domains page - user will login manually
        await page.goto(DNS_URL)
        print(">>> Please log in to your Wix account in the browser window...")
        print(">>> After logging in, navigate to: Domains > bezliny.com > Manage DNS Records")
        print(">>> Once you see the DNS Records page, press ENTER here to continue...")
        input()

        # Wait for DNS records page to be ready
        await page.wait_for_timeout(2000)

        # --- Edit existing A record ---
        print(">>> Editing existing A record...")
        # Find the A record section and click the 3-dot menu
        a_section = page.locator('text=A (Host)').first
        await a_section.scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)

        # Click the edit button on the existing A record (185.230.63.107)
        a_record_row = page.locator('text=185.230.63.107').first
        # Find the 3-dot menu near this record
        a_menu = a_record_row.locator('xpath=ancestor::tr | ancestor::div[contains(@class,"row") or contains(@class,"record")]').locator('[data-hook*="more"], [aria-label*="More"], button:has(svg)').last
        try:
            await a_menu.click(timeout=5000)
        except:
            # Try alternative: look for ⋮ button near the record
            menus = page.locator('[data-hook="dns-record-actions"] >> button, [class*="action"] >> button, [class*="menu"] >> button')
            first_menu = menus.first
            await first_menu.click(timeout=5000)

        await page.wait_for_timeout(500)

        # Click Edit
        edit_btn = page.locator('text=Edit').first
        await edit_btn.click()
        await page.wait_for_timeout(1000)

        # Clear and type new value
        value_input = page.locator('input[name*="value"], input[placeholder*="value"], input[data-hook*="value"]').first
        await value_input.clear()
        await value_input.fill(GITHUB_PAGES_IPS[0])
        await page.wait_for_timeout(500)

        # Save
        save_btn = page.locator('text=Save').first
        await save_btn.click()
        await page.wait_for_timeout(2000)
        print(f">>> A record updated to {GITHUB_PAGES_IPS[0]}")

        # --- Add 3 more A records ---
        for ip in GITHUB_PAGES_IPS[1:]:
            print(f">>> Adding A record: {ip}")
            add_a_btn = page.locator('text=Add Record').first
            await add_a_btn.click()
            await page.wait_for_timeout(1000)

            # Fill host
            host_input = page.locator('input[name*="host"], input[placeholder*="host"], input[data-hook*="host"]').first
            try:
                await host_input.clear()
                await host_input.fill("bezliny.com")
            except:
                pass

            # Fill value
            value_input = page.locator('input[name*="value"], input[placeholder*="value"], input[data-hook*="value"]').first
            await value_input.clear()
            await value_input.fill(ip)
            await page.wait_for_timeout(500)

            # Save
            save_btn = page.locator('text=Save').first
            await save_btn.click()
            await page.wait_for_timeout(2000)
            print(f">>> A record added: {ip}")

        # --- Edit CNAME record ---
        print(">>> Editing CNAME record...")
        cname_section = page.locator('text=CNAME').first
        await cname_section.scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)

        # Find cdn1.wixdns.net and click its menu
        cname_row = page.locator('text=cdn1.wixdns.net').first
        cname_menu = cname_row.locator('xpath=ancestor::tr | ancestor::div[contains(@class,"row") or contains(@class,"record")]').locator('button:has(svg)').last
        try:
            await cname_menu.click(timeout=5000)
        except:
            # Find the second ⋮ menu on page (first is for A record)
            menus = page.locator('[data-hook="dns-record-actions"] >> button, [class*="action"] >> button')
            await menus.nth(1).click(timeout=5000)

        await page.wait_for_timeout(500)

        edit_btn = page.locator('text=Edit').first
        await edit_btn.click()
        await page.wait_for_timeout(1000)

        # Clear and type new CNAME value
        value_input = page.locator('input[name*="value"], input[placeholder*="value"], input[data-hook*="value"]').first
        await value_input.clear()
        await value_input.fill(CNAME_VALUE)
        await page.wait_for_timeout(500)

        save_btn = page.locator('text=Save').first
        await save_btn.click()
        await page.wait_for_timeout(2000)
        print(f">>> CNAME updated to {CNAME_VALUE}")

        print("\n✅ All DNS records updated! Your site should be live at bezliny.com in 10-30 minutes.")
        print(">>> You can close the browser now. Press ENTER to exit...")
        input()
        await browser.close()

asyncio.run(main())
