<template>

  <div v-if="existEmployeeId" class="header">

    <nav class="employee-menu">

      <button class="employee-menu__btn-open" type="button" @click="btnOpenClickHandler"></button>

      <ul class="employee-menu__list" :class="menuConditionClass">
        <li class="employee-menu__item">
          <button class="employee-menu__btn-close" type="button" @click="btnCloseClickHandler">Закрыть Меню</button>
        </li>
        <li class="employee-menu__item" v-for="(item, index) in menuList" :key='index'>
          <a class="employee-menu__link" :class="{'employee-menu__link--active' : item.isItemActive}" :href="item.link" @click="menuLinkClickHandler (index)">{{item.name}}</a>
        </li>
      </ul>

    </nav>

  </div>

</template>

<script>
export default {
  name: 'EmployeeMenu',
  data: () => ({
    menuList: [
      {
        name: 'Профиль',
        link: '',
        isItemActive: false
      },
      {
        name: 'Заказы',
        link: '',
        isItemActive: false
      },
      {
        name: 'Рейтинг',
        link: '',
        isItemActive: false
      },
      {
        name: 'Нарушения',
        link: '',
        isItemActive: false
      },
      {
        name: 'Обращения',
        link: '',
        isItemActive: false
      },
      {
        name: 'Новости',
        link: '',
        isItemActive: false
      },
      {
        name: 'Средства и материалы',
        link: '',
        isItemActive: false
      },
      {
        name: 'Обучение',
        link: '',
        isItemActive: false
      },
      {
        name: 'Услуги',
        link: '',
        isItemActive: false
      },
      {
        name: 'Часто задаваемые вопросы',
        link: '',
        isItemActive: false
      },
      // {
      //   name: 'Полная версия',
      //   link: '',
      //   isItemActive: false
      // },
      {
        name: 'Выйти',
        link: '',
        isItemActive: false
      }
    ],
    menuConditionClass: ''
  }),
  methods: {
    btnOpenClickHandler () {
      console.log(this.$route);
      this.menuConditionClass = 'employee-menu__list--open';
    },

    btnCloseClickHandler () {
      this.menuConditionClass = 'employee-menu__list--close';
    },

    menuLinkClickHandler (i) {
      this.menuList.forEach((item) => {
        if (item.isItemActive) {
          item.isItemActive = false;
        }
      });
      this.menuList[i].isItemActive = true;
    }
  },
  computed: {
    existEmployeeId () {
      const employeeId = this.$store.getters.employeeId;
      const exist = Boolean(employeeId);
      // console.log(global);
      if (exist) {
        this.menuList.forEach(el => {
          switch (el.name) {
            case 'Профиль':
              el.link = `/staff/${employeeId}/?profile=true`;
              break;
            case 'Заказы':
              el.link = `/staff/${employeeId}/?orders=true`;
              break;
            case 'Рейтинг':
              el.link = `/staff/${employeeId}/rating2`;
              break;
            case 'Нарушения':
              el.link = `/staff/${employeeId}/disciplinary`;
              break;
            case 'Обращения':
              el.link = `/staff/${employeeId}/conversations`;
              break;
            case 'Новости':
              el.link = '/staff/' + employeeId + '/news';
              break;
            case 'Средства и материалы':
              el.link = '/staff/' + employeeId + '/means_and_materials';
              break;
            case 'Обучение':
              el.link = '/staff/' + employeeId + '/study';
              break;
            case 'Услуги':
              el.link = '/staff/' + employeeId + '/description_services';
              break;
            case 'Часто задаваемые вопросы':
              el.link = '/staff/' + employeeId + '/faq';
              break;
            case 'Полная версия':
              el.link = '/staff/' + employeeId + '/news';
              break;
            case 'Выйти':
              el.link = '/staff/logout';
              break;
            default:
              console.error(`Not valid menu itme ${JSON.stringify(el)}`);
          }
          return el;
        });
      }
      return exist;
    }
  }
};
</script>

<style scoped>
  @import "../../css/variables.css";

  .header {
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
    background-color: #e9e9e9;
  }

  .employee-menu {
    &__btn-open {
      width: 28px;
      height: 28px;
      border: 3px solid #ffffff;
      border-radius: 50%;
      box-shadow: 1px 2px 5px 0 #cbc9c9;
      background: rgba(0, 0, 0, 0.3) url("img/menu.svg") no-repeat center center;
      background-size: 14px;

      outline: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(200, 0, 0, 0);
    }

    &__list {
      transform: translateX(-100%);
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 270px;
      height: 100vh;
      background-color: #2a2a2a;

      &--open {
        animation-name: open-menu;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }

      &--close {
        animation-name: close-menu;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }
    }

    &__item {
      width: 100%;
      border-top: 1px solid #1f1f1f;
    }

    &__link {
      position: relative;
      display: block;
      padding: 11.2px 40px 11.2px 16px;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.3em;
      font-weight: 700;
      text-shadow: 0 1px 0 #111111;
      color: #ffffff;
      background-color: #333333;
      outline: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(200, 0, 0, 0);

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 9px;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #1f1f1f url("img/arrow.svg") no-repeat 5px center;
        background-size: 14px;
      }

      &:hover {
        background-color: #373737;
      }

      &--active {
        border-color: #2ad;
        color: #fff;
        text-shadow: 0 1px 0 #08b;
        background-color: #2ad;

        &::after {
          display: none;
        }

        &:hover {
          border-color: #2ad;
          color: #fff;
          text-shadow: 0 1px 0 #08b;
          background-color: #2ad;
        }

        &:focus {
          box-shadow: 0 0 12px #2ad;
        }
      }
    }

    &__btn-close {
      position: relative;
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 11.2px 40px 11.2px 16px;
      text-align: left;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.3em;
      font-weight: 700;
      text-shadow: 0 1px 0 #111111;
      color: #ffffff;
      background-color: #333333;

      outline: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(200, 0, 0, 0);

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 9px;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #1f1f1f url("img/cross.svg") no-repeat center center;
        background-size: 12px;
      }
    }
  }

  @keyframes open-menu {

    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }

  }

  @keyframes close-menu {

    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }

  }

</style>
