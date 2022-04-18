/*
 functions used to read data from dataLoader.js
 follow me on twitter @FromBoone
*/

class InputData {
    constructor(
        time,
        latitude,
        longitude,
        gps_altitude,
        bmp_altitude,
        bmp_pressure,
        bmp_temp,
        dig_temp,
        css_temp,
        css_eCO2,
        css_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magnetX,
        magnetY,
        magnetZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time = time;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmp_altitude = bmp_altitude;
        this.bmp_pressure = bmp_pressure;
        this.bmp_temp = bmp_temp;
        this.dig_temp = dig_temp;
        this.css_temp = css_temp;
        this.css_eCO2 = css_eCO2;
        this.css_TVOC = css_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magnetX = magnetX;
        this.magnetY = magnetY;
        this.magnetZ = magnetZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}



function dataRow(legend, value, units) {
    var msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " ";
    msg += units;
    msg += "</td>";
    return msg;
}

function updateDisplay() {
    //update time
    theTime = new Date();
    document.getElementById("timeStamp").innerHTML = "it is currently " + theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()) + " my dude";

    //update table
    var timeRead = data[index].time;
    if(timeRead >= 10) {
        document.getElementById("data").rows["seconds"    ].innerHTML = dataRow("time passed",data[index].time, " ");
        document.getElementById("data").rows["latitude"   ].innerHTML = dataRow("latitude ",data[index].latitude, " ");
        document.getElementById("data").rows["longitude"  ].innerHTML = dataRow("longitude",data[index].longitude, " ");
        document.getElementById("data").rows["gpsAltitude"].innerHTML = dataRow("gps altitude",data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpAltitude"].innerHTML = dataRow("bmp altitude",data[index].bmp_altitude, " ");
        document.getElementById("data").rows["bmpPressure"].innerHTML = dataRow("bmp pressure",data[index].bmp_pressure, " ");
        document.getElementById("data").rows["bmpTemp"    ].innerHTML = dataRow("bmp temperature",data[index].bmp_temp, " ");
        document.getElementById("data").rows["digTemp"    ].innerHTML = dataRow("digital temperature",data[index].dig_temp, " ");
        document.getElementById("data").rows["cssTemp"    ].innerHTML = dataRow("css temperature",data[index].css_temp, " ");
        document.getElementById("data").rows["csseCO2"    ].innerHTML = dataRow("css eCO2",data[index].css_eCO2, " ");
        document.getElementById("data").rows["cssTVOC"    ].innerHTML = dataRow("css TVOC",data[index].css_TVOC, " ");
        document.getElementById("data").rows["UV"         ].innerHTML = dataRow("UV",data[index].UV, " ");
        document.getElementById("data").rows["accelX"     ].innerHTML = dataRow("acceleration x",data[index].accelX, " ");
        document.getElementById("data").rows["accelY"     ].innerHTML = dataRow("acceleration y",data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"     ].innerHTML = dataRow("acceleration z",data[index].accelZ, " ");
        document.getElementById("data").rows["magnetX"    ].innerHTML = dataRow("magnetic x",data[index].magnetX, " ");
        document.getElementById("data").rows["magnetY"    ].innerHTML = dataRow("magnetic y",data[index].magnetY, " ");
        document.getElementById("data").rows["magnetZ"    ].innerHTML = dataRow("magnetic z",data[index].magnetZ, " ");
        document.getElementById("data").rows["gyroX"      ].innerHTML = dataRow("gyro x",data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"      ].innerHTML = dataRow("gyro y",data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"      ].innerHTML = dataRow("gyro z",data[index].gyroZ, " ");
    }

    if(index > 500) {
        index = 0;
    } else index++;
}