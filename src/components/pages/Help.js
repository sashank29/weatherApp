import React from 'react';
import { Jumbotron, Alert } from 'react-bootstrap';

import config from '../../modules/config.json';
import response from './response.json';

export const Help = () => {
    return <Jumbotron className="bg-white b-1-cello brad-5 text-cello">
        <Alert variant="primary fs-1">Instructions</Alert>
        <ul className="fs-1">
            <li>Design and develop a weather check page</li>
            <li>Users must be able to enter a city name to check weather</li>
            <li>Users must be able to select weather measurement unit of either metric (&deg;c) or imperial (F)</li>
            <li>Display the data as a card <code className="bg-gray pr-2 pl-2">*appended</code> to the page</li>
            <li>Use a reusable component to display weather data</li>
            <li>Display appropriate icon based on the weather condition</li>
        </ul>
        <Alert variant="primary fs-1">API Details</Alert>
        <ul className="fs-1">
            <li>API key will be provided during the session</li>
            <li>Must use <code>/modules/utils.js</code> for calling API</li>
            <li>API: <a href={config.API}>{config.API}?q=&lt;city&gt;&appid=&lt;secret_key&gt;</a></li>
            <li>You can also pass <code>units=&lt;unit&gt;</code> query parameter as well to the API</li>
            <li>
                Example of API Response:<br/>
                <pre className="bg-gray p-3">
                    {JSON.stringify(response, null, 2)}
                </pre>
                <br/>
                Fields in API response: <br/>
                <ul class="docs-list">
                  <li>
                     <code>coord</code>
                     <ul>
                        <li><code>coord.lon</code> City geo location, longitude</li>
                        <li><code>coord.lat</code> City geo location, latitude</li>
                     </ul>
                  </li>
                  <li>
                     <code>weather</code> (more info Weather condition codes)
                     <ul>
                        <li><code>weather.id</code> Weather condition id</li>
                        <li><code>weather.main</code> Group of weather parameters (Rain, Snow, Extreme etc.)</li>
                        <li><code>weather.description</code> Weather condition within the group. You can get the output in your language. <a href="#multi">Learn more</a></li>
                        <li><code>weather.icon</code> Weather icon id</li>
                     </ul>
                  </li>
                  <li><code>base</code> Internal parameter
                  </li>
                  <li>
                     <code>main</code>
                     <ul>
                        <li><code>main.temp</code> Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. </li>
                        <li><code>main.feels_like</code> Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. </li>
                        <li><code>main.pressure</code> Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa</li>
                        <li><code>main.humidity</code> Humidity, %</li>
                        <li><code>main.temp_min</code> Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.</li>
                        <li><code>main.temp_max</code> Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.</li>
                        <li><code>main.sea_level</code> Atmospheric pressure on the sea level, hPa</li>
                        <li><code>main.grnd_level</code> Atmospheric pressure on the ground level, hPa</li>
                     </ul>
                  </li>
                  <li>
                     <code>wind</code>
                     <ul>
                        <li><code>wind.speed</code> Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.</li>
                        <li><code>wind.deg</code> Wind direction, degrees (meteorological)</li>
                        <li><code>wind.gust</code> Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour</li>
                     </ul>
                  </li>
                  <li>
                     <code>clouds</code>
                     <ul>
                        <li><code>clouds.all</code> Cloudiness, %</li>
                     </ul>
                  </li>
                  <li>
                     <code>rain</code>
                     <ul>
                        <li><code>rain.1h</code> Rain volume for the last 1 hour, mm</li>
                        <li><code>rain.3h</code> Rain volume for the last 3 hours, mm</li>
                     </ul>
                  </li>
                  <li>
                     <code>snow</code>
                     <ul>
                        <li><code>snow.1h</code> Snow volume for the last 1 hour, mm</li>
                        <li><code>snow.3h</code> Snow volume for the last 3 hours, mm</li>
                     </ul>
                  </li>
                  <li><code>dt</code> Time of data calculation, unix, UTC
                  </li>
                  <li>
                     <code>sys</code>
                     <ul>
                        <li><code>sys.type</code> Internal parameter</li>
                        <li><code>sys.id</code> Internal parameter</li>
                        <li><code>sys.message</code> Internal parameter</li>
                        <li><code>sys.country</code> Country code (GB, JP etc.)</li>
                        <li><code>sys.sunrise</code> Sunrise time, unix, UTC</li>
                        <li><code>sys.sunset</code> Sunset time, unix, UTC</li>
                     </ul>
                  </li>
                  <li><code>timezone</code> Shift in seconds from UTC
                  </li>
                  <li><code>id</code> City ID
                  </li>
                  <li><code>name</code> City name
                  </li>
                  <li><code>cod</code> Internal parameter
                  </li>
               </ul>
            </li>
        </ul>
    </Jumbotron>
}