import { test, expect } from '@playwright/test';

test('add product to cart',async ({ page }) => {

    //1)Lauch browser and navigate to url: https://automationexercise.com/
    await page.goto('https://automationexercise.com');

    //2)hover on firs product:
    await page.locator('img[src="/get_product_picture/1"]').hover();

    //Close the add:
    if(page.url() === 'https://automationexercise.com/#google_vignette'){
        await page.frameLocator('#aswift_5').frameLocator('internal:attr=[title="Advertisement"i]').getByRole('button', { name: 'Close ad' }).click();
    };
    
    //3) click on button for more details of the first product:
    await page.locator('a[href="/product_details/1"]').click();
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