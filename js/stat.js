
'use strict';

var Cloud = {
  Width: 420,
  Height: 270,
  X: 100,
  Y: 10,
  Bottom: 280
};

var Bar = {
  Width: 40,
  Height: 150,
  Gap: 50
};

var Gap = {
  Gap: 10,
  Font: 15
};

var drawReact = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, font, color) {
  context.font = font || '16px PT Mono';
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(text, x, y);
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
  drawReact(ctx, Cloud.X + Gap.Gap, Cloud.Y + Gap.Gap, Cloud.Width, Cloud.Height);
  drawReact(ctx, Cloud.X, Cloud.Y, Cloud.Width, Cloud.Height, '#FFFFFF');

  drawText(ctx, 'Ура вы победили!', Cloud.X + Gap.Gap * 2, Cloud.Y + Gap.Gap * 2);
  drawText(ctx, 'Список резульатов', Cloud.X + Gap.Gap * 2, Cloud.Y + Gap.Gap);

  var maxTime = getMaxTime (times);

  for (var i = 0; i < players.length; i++) {
    var barItemHeight = (Bar.Height * temes[i]) / maxTime;
    var barX = Cloud.X + Gap.Gap * 3 + Bar.Gap * 2 * i;

    drawReact(ctx, barX, Cloud.Bottom - Gap.Gap * 3 - Gap.Font - barItemHeight, Bar.Width, barItemHeight, players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomBlue());
    drawText(ctx, players[i], Cloud.Bottom - Gap.Gap * 2);
    drawText(ctx, Math.round(times[i]), barX, Cloud.Bottom - Gap.Gap * 3 - Gap.Font - barItemHeight);
  }
};
