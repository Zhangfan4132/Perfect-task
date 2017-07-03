define([
  'jquery', 
  'carousel', 
  'goTop',
  'waterfall'
], function($, Carousel, goTop, WaterFall) {
  // carousel
  var imgSrcList = ['./img/222.jpg', './img/222.jpg', './img/222.jpg']
  var carousel = new Carousel($('.carousel-container'), imgSrcList, false)

  // goTop
  var goTop = new goTop($('body'))

  // waterfall
  var waterFall = new WaterFall('.waterfall')
});