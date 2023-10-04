import { test, expect } from '@playwright/test';

test('add product to cart',async ({ page }) => {

    //1)Lauch browser and navigate to url: https://automationexercise.com/
    await page.goto('https://automationexercise.com/products');

     //Close the add:
    if(await page.locator('//*[@id="dismiss-button"]/div/span').xpalocator('iframe[name="ad_iframe"]').getByLabel('Close ad').isVisible()){
        await page.locator('//*[@id="dismiss-button"]/div/span').locator('iframe[name="ad_iframe"]').getByLabel('Close ad').click();
    };
    
    //2)hover on firs product:    
    await page.locator('img[src="/get_product_picture/1"]').hover();
    
    //3) click on button for more details of the first product:
    await page.locator('a[href="/product_details/1"]').click();

    //Close the add:
    if(await page.frameLocator('iframe[name="aswift_5"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad').isVisible()){
        await page.frameLocator('iframe[name="aswift_5"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad').click();
    };

    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');
    

    //4) Add change de value of quantity the products from 1 to 3
    await page.locator('#quantity').fill('3');

    //5) Click on "Add to cart" button:
    await page.getByText('Add to cart').click();

    //6) Verify the modal confirmation and the "Added!" text:
    await expect(page.locator('div[class="modal-dialog modal-confirm"]').isVisible()).toBeTruthy();

    await expect(page.getByText('Added!')).toBeVisible();

    //7) Click on "Continue Shopping"  button:
    await page.getByAltText('Continue Shopping').click();

    //8) Verify the modal is not visible:
    await expect(page.locator('div.modal-content')).toBeHidden();

});