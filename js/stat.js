
'use strict';

var Cloud = {
  width: 420,
  height: 270,
  x: 100,
  y: 10,
  bottom: 280
};

var Bar = {
  width: 40,
  height: 150,
  gap: 50
};

var Gap = {
  gap: 10,
  font: 15
};

var drawReact = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, font, color) {
  ctx.font = font || '16px PT Mono';
  ctx.fillStyle = color || '#000000';
  ctx.fillText(text, x, y);
};

var getMaxTime = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomBlue = function () {
  return 'hsl(240,' + (Math.random().toFixed(2) * 100) + '%, 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  drawReact(
      ctx,
      Cloud.x + Gap.gap,
      Cloud.y + Gap.gap,
      Cloud.width,
      Cloud.height
  );
  drawReact(
      ctx,
      Cloud.x,
      Cloud.y,
      Cloud.width,
      Cloud.height,
      '#FFFFFF'
  );
  drawText(
      ctx,
      'Ура вы победили!',
      Cloud.x + Gap.gap * 2,
      Cloud.y + Gap.gap * 3
  );
  drawText(
      ctx,
      'Список резульатов',
      Cloud.x + Gap.gap * 2,
      Cloud.y + Gap.gap * 5
  );

  var maxTime = getMaxTime(times);

  for (var i = 0; i < players.length; i++) {
    var barItemHeight = (Bar.Height * times[i]) / maxTime;
    var barX = Cloud.X + Gap.gap * 3 + Bar.gap * 2 * i;

    drawReact(
        ctx,
        barX,
        Cloud.bottom - Gap.gap * 3 - Gap.font - barItemHeight,
        Bar.width,
        barItemHeight,
        players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomBlue());


    drawText(
        ctx,
        players[i],
        barX,
        Cloud.bottom - Gap.gap * 2
    );
    drawText(
        ctx,
        Math.round(times[i]),
        barX,
        Cloud.bottom - Gap.gap * 3 - Gap.font - barItemHeight);
  }
};
