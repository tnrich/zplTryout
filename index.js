import BrowserPrint, { Printer } from "browserprint-es";

(async () => {
  try {
    console.log(`getting printer`)
    const device = await BrowserPrint.getDefaultDeviceAsync("printer");
    // const device = await BrowserPrint.getLocalDevicesAsync("printer");
    console.log(`device1:`, device);
    if (!device) {
      return;
    }
    document.getElementById("status").innerText = "Zebra BrowserPrint is installed and ready to use.";
    document.getElementById("print").removeAttribute("disabled");
  } catch (error) {
    console.error(`error1:`, error);
  }
})();

document.getElementById("print").addEventListener("click", async () => {
 
  try {
    const device = await BrowserPrint.getDefaultDeviceAsync("printer");
    console.log(`device:`,device)
    const printer = new Printer(device);
    console.log(`printer:`,printer)
    const status = await printer.getStatusAsync();
    console.log(`status:`, status);

    console.log(`try sending over some zpl`)
    const res = await device.sendAsync("weee") //real zpl here
    console.log(`res:`,res)
   
  } catch (error) {
    console.error(`error2:`, error);
  }
})