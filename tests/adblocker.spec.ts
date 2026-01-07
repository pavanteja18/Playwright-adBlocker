import { expect, test } from "@playwright/test";

const adList = [
  "https://securepubads.g.doubleclick.net",
  "https://config.aps.amazon-adsystem.com",
  "https://id.hadron.ad.gt",
  "https://match.adsrvr.org",
  "https://aax.amazon-adsystem.com",
  "https://mobileads.indiatimes.com",
  "https://direct.adsrvr.org",
  "https://ad.doubleclick.net",
  "https://ib.adnxs.com",
  "https://a.teads.tv",
  "https://pagead2.googlesyndication.com",
  "https://ep1.adtrafficquality.google",
  "https://ep2.adtrafficquality.google",
  "https://ad.turn.com",
  "https://cs.admanmedia.com",
  "https://t.adx.opera.com",
  "https://secure.adnxs.com",
  "https://tpc.googlesyndication.com",
];

test.describe("Test 1", () => {
  test("Navigation -", async ({ page }) => {
    await page.route("**/*", (route) => {
      const ads = route.request().url();

      if (
        adList.some((ad) => ads.includes("ad")) ||
        adList.some((ad) => ads.includes("syndication"))
      ) {
        route.abort();
      } else {
        route.continue();
      }
    });
    await test.step("The HomePage 🏚️", async () => {
      await page.goto("https://timesofindia.indiatimes.com/");
      await expect(page).toHaveTitle(
        "TOI - Breaking News,  Latest News, India News, World News, Bollywood, Sports, Business and Political News | The Times of India"
      );
      await expect(page).toHaveURL("https://timesofindia.indiatimes.com/");

      await page.waitForTimeout(3000);
    });
  });
});
