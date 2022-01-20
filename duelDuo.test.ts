
import { Builder, Capabilities, By } from "selenium-webdriver"

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
require('chromedriver')


beforeEach(async () => {
    await driver.get('http://localhost:3000')
    await driver.sleep(3000)
})

afterAll(async () => {
   await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Robot can be selected', async() => {
    // let select= async(driver)=>{
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.findElement(By.className('bot-btn')).click()
    // await driver.sleep(3000)
    // await driver.findElement(By.id('draw')).click()
    const playerDuo = await driver.findElement(By.id('player-duo')) 
    const hasChilds = playerDuo;
 
    expect(playerDuo).toBeTruthy()

    
    // await select(driver)
    // await driver.sleep(3000)
})
//     // let 

// })