const pluPbatteryWrapper = document.querySelector('.plug__battery--wrapper');
const fullBatteryWrapper = document.querySelector('.full__battery--wrapper');
const chargingIcon = document.querySelector('.charging-icon');
const iconIndicators = document.querySelector('.icon__indicators');
const batteryTextIndicator = document.querySelector('.batteryTextIndicator');

// Проверяем, поддерживается ли Battery API в текущем браузере
if ('getBattery' in navigator) {
   navigator.getBattery().then(function (battery) {
      // Обновляем заполнение иконки батареи при изменении уровня заряда
      function updateBatteryLevel() {
         var batteryLevel = Math.round(battery.level * 100);
         var charging = battery.charging;
         document.getElementById('battery-level').style.width = batteryLevel + '%';

         batteryTextIndicator.innerText = 'Заряд: ' + batteryLevel + '%';

         if (batteryLevel <= 20 && !charging) {
            iconIndicators.innerHTML = `<div class="plug__battery--wrapper">
                <i class="ri-plug-line anim-red"></i>
                <div style="white-space: nowrap; color: #c4c4c4; font-size: 14px; font-weight: 500;">Низкий заряд</div>
            </div>`
            iconIndicators.style.display = 'flex';
         } else if (batteryLevel == 100) {
            iconIndicators.innerHTML = `<div class="full__battery--wrapper">
            <i class="ri-battery-2-fill fullBatteryIcon"></i>
            <div style="white-space: nowrap; color: #c4c4c4; font-size: 14px; font-weight: 500;">Батарея заряжена</div>
            </div>`;
            iconIndicators.style.display = 'flex';
         } else if (charging) {
            iconIndicators.innerHTML = `<div class="charging-icon" id="charging-icon">
                <i class="ri-flashlight-line anim-green"></i>
                <div style="color: #c4c4c4; font-size: 14px; font-weight: 500;">Заряжается...</div>
            </div>`;
            iconIndicators.style.display = 'flex';
         } else {
            iconIndicators.style.display = 'none';
         }

      }

      // Инициализируем заполнение иконки батареи
      updateBatteryLevel();

      // Обновляем заполнение при изменении уровня заряда
      setInterval(updateBatteryLevel, 1500);

   });

} else {
   document.querySelector('.battery__wrapper').style.display = 'none';
}