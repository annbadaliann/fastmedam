class Screen {

  static SmallComputerScreen = 1440;
  static TabletScreen = 1024;
  static MobileScreen = 720;
  static SmallMobileScreen = 520;

  static get IsNormalComputer() { return window.innerWidth > Screen.SmallComputerScreen; }
  static get IsSmallComputer() { return window.innerWidth < Screen.SmallComputerScreen; }
  static get IsTablet() { return window.innerWidth < Screen.TabletScreen; }
  static get IsMobile() { return window.innerWidth < Screen.MobileScreen; }
  static get IsSmallMobile() { return window.innerWidth < Screen.SmallMobileScreen; }

  static Init = () => window.addEventListener('resize', Screen.Resize);
  static Resize = () => {
    Screen.IsNormalComputer && window.dispatchEvent(new CustomEvent('screen:normal-computer'));
    Screen.IsSmallComputer && window.dispatchEvent(new CustomEvent('screen:small-computer'));
    Screen.IsTablet && window.dispatchEvent(new CustomEvent('screen:tablet'));
    Screen.IsMobile && window.dispatchEvent(new CustomEvent('screen:mobile'));
    Screen.IsSmallMobile && window.dispatchEvent(new CustomEvent('screen:small-mobile'));
  }
}

export default Screen;