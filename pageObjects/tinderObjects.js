module.exports = {
    url: 'https://tinder.com/app/profile',
    elements: {
        logInWithPhone: {
            selector: '(//button[@class="button Lts($ls-s) Z(0) CenterAlign Mx(a) Pos(r) Cur(p) Tt(u) Bdrs(100px) Px(48px) Px(40px)--s Py(0) Mih(42px)--s Mih(50px)--ml button--outline Bdw(2px) Bds(s) Trsdu($fast) Bdc(#fff) C(#fff) Bdc(#fff):h C(#fff):h Bdc(#fff):f C(#fff):f Bdc(#fff):a C(#fff):a Fw($semibold) focus-button-style Mb(20px)--ml W(100%)--ml W(100%)--s Fz(4vw)--s"])[2]',
            locateStrategy: 'xpath'
        },
        logInWithFacebookButton: {
            selector: '(//button[@class="button Lts($ls-s) Z(0) CenterAlign Mx(a) Pos(r) Cur(p) Tt(u) Bdrs(100px) Px(48px) Px(40px)--s Py(0) Mih(54px) button--outline Bdw(2px) Bds(s) Trsdu($fast) Bdc($c-secondary) C($c-secondary) Bdc($c-base):h C($c-base):h Bdc($c-base):f C($c-base):f Bdc($c-base):a C($c-base):a Fw($semibold) focus-button-style Mb(20px)--ml W(100%)--ml W(100%)--s Fz(4vw)--s"])[2]',
            locateStrategy: 'xpath'

        },
        logInXButton: {
            selector: '//button[@class="C($c-divider) Bdc($c-divider) Bdc($c-gray):h C($c-gray):h Bdrs(50%) Bds(s) Bdw(3px) Trsdu($fast) Trsp($transform) Rotate(-90deg):h--ml close P(0) Lh(1) Cur(p) focus-button-style Pos(a) T(16px) End(16px)"]',
            locateStrategy:'xpath'
        },
        logInCornerButton: {
            selector: '//button[@class="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Ell Px(24px) Px(20px)--s Py(0) Mih(40px) Fw($semibold) focus-button-style Fz($s) Bdrs(4px) Bg(#fff) C($c-pink) Bg($primary-gradient):h C(#fff):h"]',
            locateStrategy: 'xpath'

        },
        phoneNumberField: {
            selector: '//input[@class="Fz($m) Va(m) Py(8px) Bdrs(4px)--ml Bgc($c-divider-lite)--ml Px(8px)--ml BdB--s Bdrs(0)--s Bdbc($c-secondary)--s Px(4px)--s D(ib) Lts($ls-m) Bdrsbstart(0) Bdrststart(0)"]',
            locateStrategy: 'xpath'

        }
        
    }

}