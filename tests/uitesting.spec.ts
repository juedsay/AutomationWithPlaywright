import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('http://uitestingplayground.com/');
   
   await page.locator('#title').click();//Selector de ID
   await page.locator('.alert').click();//Selector de Clase
   await page.locator('a.navbar-brand').click();//Selector de etiqueta, combinado con una clase para ser más específico

  // await page.getByRole('link', { name: 'Resources' }).click();
  // await page.getByRole('link', { name: 'Home' }).click();
  // await page.getByRole('link', { name: 'Click' }).click();
  // await page.getByRole('button', { name: 'Button That Ignores DOM Click Event' }).click();
});