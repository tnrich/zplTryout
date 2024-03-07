import BrowserPrint, { Printer, Device } from "browserprint-es";

let hasZebraBrowserPrint;
(async () => {
  try {
    console.log(`getting printer`)
    const device = await BrowserPrint.getDefaultDeviceAsync("printer");
    // const device = await BrowserPrint.getLocalDevicesAsync("printer");
    console.log(`device:`, device);
    if (!device) {
      return;
    }
    console.log(`send weee`)
    const res = await device.sendAsync("weee") //real zpl here
    console.log(`res:`,res)

    // const printer = new Printer(device);
    // console.log(`get status`)
    // const status = await printer.getStatusAsync();
    // console.log(`status:`, status);
    
    // const sgd = await printer.getSGD("device.friendly_name");
    // console.log(`sgd:`, sgd);
    hasZebraBrowserPrint = true;
    document.getElementById("status").innerText = "Zebra BrowserPrint is installed and ready to use.";
  } catch (error) {
    console.error(`error:`, error);
    hasZebraBrowserPrint = false;
  }
})();

document.getElementById("print").addEventListener("click", async () => {
  if (!hasZebraBrowserPrint) {
    return;
  }
  try {
    const device = await BrowserPrint.getDefaultDeviceAsync("printer");
    const printer = new Printer(device);
    const status = await printer.getStatusAsync();
    
    console.log(`status:`, status);
   
  } catch (error) {
    console.error(`error:`, error);
  }
}