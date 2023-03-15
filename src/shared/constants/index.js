import {
  dashboard,
  FiveAvatars,
  FourAvatars,
  home,
  projects,
  reporting,
  settings,
  SevenAvatars,
  SixAvatars,
  support,
  tasks,
  ThreeAvatars,
  users,
} from "../assets";

export const navlinks = [
  {
    name: "Home",
    imgUrl: home,
    link: "/",
    disabled: true,
  },
  {
    name: `Dashboard`,
    imgUrl: dashboard,
    link: "/dashboard",
    disabled: true,
  },
  {
    name: "Projects",
    imgUrl: projects,
    link: "/projects",
    disabled: true,
  },
  {
    name: "Tasks",
    imgUrl: tasks,
    link: "/tasks",
    disabled: true,
  },
  {
    name: "Reporting",
    imgUrl: reporting,
    link: "/reporting",
    disabled: true,
  },
  {
    name: "Users",
    imgUrl: users,
    link: "/users",
    disabled: true,
  },
  {
    name: "Support",
    imgUrl: support,
    link: "/support",
    disabled: true,
  },
  {
    name: "Settings",
    imgUrl: settings,
    link: "/settings",
  },
];

export const tableRows = [
  {
    invoice: "Basic plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: true,
    usersOnPlan: SevenAvatars,
  },
  {
    invoice: "Basic plan - Nov 2022",
    amount: "USD $10.00",
    date: "Nov 1, 2022",
    status: true,
    usersOnPlan: SixAvatars,
  },
  {
    invoice: "Basic plan - Oct 2022",
    amount: "USD $10.00",
    date: "Oct 1, 2022",
    status: true,
    usersOnPlan: FiveAvatars,
  },
  {
    invoice: "Basic plan - Sep 2022",
    amount: "USD $10.00",
    date: "Sep 1, 2022",
    status: true,
    usersOnPlan: ThreeAvatars,
  },
  {
    invoice: "Basic plan - Aug 2022",
    amount: "USD $10.00",
    date: "Aug 1, 2022",
    status: true,
    usersOnPlan: FourAvatars,
  },
  {
    invoice: "Basic plan - Jul 2022",
    amount: "USD $10.00",
    date: "Jul 1, 2022",
    status: true,
    usersOnPlan: FourAvatars,
  },
  {
    invoice: "Basic plan - Jun 2022",
    amount: "USD $10.00",
    date: "Jun 1, 2022",
    status: true,
    usersOnPlan: ThreeAvatars,
  },
];
