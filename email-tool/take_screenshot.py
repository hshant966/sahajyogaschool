import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Set viewport size to desktop
        page.set_viewport_size({"width": 1280, "height": 800})
        page.goto("https://email-tool-mu.vercel.app")
        page.wait_for_load_state("networkidle")
        
        # Take desktop screenshot
        desktop_path = "/home/pranav/.gemini/antigravity-cli/brain/8501b4e0-1ed4-4751-b7ec-809d02e0aa58/desktop_preview.png"
        page.screenshot(path=desktop_path)
        print(f"Desktop screenshot saved to {desktop_path}")
        
        # Set viewport size to mobile
        page.set_viewport_size({"width": 375, "height": 667})
        page.wait_for_timeout(1000)
        
        # Take mobile screenshot
        mobile_path = "/home/pranav/.gemini/antigravity-cli/brain/8501b4e0-1ed4-4751-b7ec-809d02e0aa58/mobile_preview.png"
        page.screenshot(path=mobile_path)
        print(f"Mobile screenshot saved to {mobile_path}")
        
        browser.close()

if __name__ == "__main__":
    run()
