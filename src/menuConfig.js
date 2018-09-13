// 菜单配置
// defaultMenuConfig：脚手架默认侧边栏配置
// asideMenuConfig：自定义侧边导航配置

const defaultMenuConfig = {
  items: [
    {
      name: "首页",
      path: "home",
      icon: "icon-home",
      external: true
    },
    {
      name: "互动管理",
      path: "hu",
      icon: "icon-star",
      children: [
        {
          name: "类型管理",
          path: "/hd/type"
        },
        {
          name: "模版管理",
          path: "/hd/model"
        }
      ]
    },
    {
      name: "投放管理",
      path: "tf",
      icon: "icon-list",
      children: [
        {
          name: "投放计划管理",
          path: "/tf/plan"
        },
        {
          name: "投放素材管理",
          path: "/tf/material"
        }
      ]
    },
    {
      name: "license申请",
      path: "zs",
      icon: "icon-map",
      external: true
    },
    {
      name: "权限管理",
      path: "qx",
      icon: "icon-user",
      children: [
        {
          name: "角色管理",
          path: "/qx/role"
        },
        {
          name: "账号管理",
          path: "/qx/account"
        }
      ]
    }
  ]
};

const asideMenuConfig = [];

/**
 * 转化 name 为 url
 * @param {Array} data
 */
function formatter(data) {
  return data.map(item => {
    const result = {
      ...item,
      url: item.path
    };
    if (item.children) {
      result.children = formatter(item.children);
    }
    return result;
  });
}

defaultMenuConfig.items = formatter(defaultMenuConfig.items).concat(
  asideMenuConfig
);

export default defaultMenuConfig;
