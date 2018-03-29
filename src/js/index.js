/**
 * Created by lishilei on 2018/3/9.
 */
  $(document).ready(function() {
    var $backTopBtn = $("#backTop")
    $('#fullpage').fullpage({
      afterLoad: function (anchorLink, index) {
        console.log(anchorLink, index)
        if (index > 1) {
          $backTopBtn.show(200)
        } else {
          $backTopBtn.hide(200)
        }
        switch (index) {
          case 1:
            addAnimation('#banner1Img', 'banner-img')
            addAnimation('#banner2Img', 'banner-text')
            break
          case 3:
            addAnimation('#s3LeftEnter1', 's3-left-enter-1')
            addAnimation('#s3LeftEnter2', 's3-left-enter-2')
            addAnimation('#s3RightEnter', 's3-right-enter')
            $('.icon-btns button').map(function(index, item) {
              console.log(item)
              addAnimation(item, 's3-icon-btns-' + (index + 1))
            })
            break
          case 4:
            addAnimation('#s4LeftEnter img:first', 'top-to-bottom')
            addAnimation('#s4LeftEnter img:eq(1)', 'left-to-right')
            addAnimation('#s4LeftEnter button', 'bottom-to-top')
            addAnimation('#s4RightEnter', 's4-right-enter')
            break
          case 5:
            $('#brand li').map(function(index, item) {
              addAnimation(item, 'opacity-' + (index + 1))
            })
            break
          case 6:
            addAnimation($('#s6Box img:first'), 'bottom-to-top')
            addAnimation($('#s6Box .s6-block img:first'), 's6-bottom-to-top-2')
            addAnimation($('#s6Box .s6-block img:eq(1)'), 's6-top-to-bottom-1')
            addAnimation($('#s6Box .s6-block img:eq(2)'), 's6-top-to-bottom-3')
            addAnimation($('#s6Box .s6-block .text:eq(0)'), 's6-bottom-to-top-1')
            addAnimation($('#s6Box .s6-block .text:eq(1)'), 's6-bottom-to-top-3')
            addAnimation($('#s6Box .line-color'), 'an-width')
            break
          case 7:
            break
        }
      }
    });
    $('#gotToNext').click(function () {
      $.fn.fullpage.moveTo(index + 1);
    })
      $backTopBtn.click(function() {
      $.fn.fullpage.moveTo(1);
    })
  });

  function addAnimation (target, animationClass) {
    var dom = $(target)
    dom.addClass(animationClass)
    return dom
  }