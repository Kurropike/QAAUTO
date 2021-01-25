module.exports = {
    url: ' https://app.gogrow.com', 
    elements: {
        emailInput: {
            selector: '//input[@name="email"]',
            locateStrategy: 'xpath'
      },
        passwordInput: {
            selector: '//input[@name="password"]',
            locateStrategy: 'xpath'
      },
        dataMetricRect: {
            selector: '//div[@class="metricTile---inner---1BCIx STATIC-dashboard-metric-expandMetric metricTile---clickableMetric---28XGO"]',
            locateStrategy: 'xpath'
      },
        dotButton: {
            selector: '//div[@class="metricMenu---item---biIfV STATIC-dashboard-metric-menuTogglePopover"]',
            locateStrategy: 'xpath'
      },
        menuCopyButton: {
            selector: '//div[@class="MenuItem---menu-item---3GilO menuItem STATIC-dashboard-metric-menuOptionCopy MenuItem---styleType-regular---3IKkD"]',
            locateStrategy: 'xpath'
      },
        menuToggleDownBar: {
            selector: '(//span[@class="isvg Dropdown---dropdownToggle---1Ihk1"])[2]',
            locateStrategy: 'xpath'
      },
      menuSecondDashOption: {
            selector: '(//div[@class="DropdownOption---text---3__PU"])[2]',
            locateStrategy: 'xpath'
      },
      metricCopyOkButton: {
            selector: '//button[@class="Button---button---jhfof Button---layoutType-regular---2BqaB Button---styleType-regular---1XKxu Button---colorType-primary---3QeWT"]',
            locateStrategy: 'xpath'
      },
      dashboardBackArrowButton: {
            selector: '//div[@class="batmanBar---menuIconContainer---9xzlc pointDown STATIC-dashboard-BatmanBar-toggleMenuIcon"]',
            locateStrategy: 'xpath'
      },
      dashboardMenuSalesDash: {
            selector: '(//div[@class="sidebar---dashboardItemInner---2naWD"])[1]',
            locateStrategy: 'xpath'
      },
      salesDashDashboard: {
            selector: '//div[@class="metricTile---inner---1BCIx STATIC-dashboard-metric-expandMetric metricTile---clickableMetric---28XGO"]',
            locateStrategy: 'xpath'
      },
      
    }
}