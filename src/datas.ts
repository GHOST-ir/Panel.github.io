type data = {
    'name': string,
    'Sale': number
}[]

type newUsersType = { id: number, userName: string, title: string }[]

let xAxisData: data = [
    {
        'name': 'Jan',
        'Sale': 112_000
    },
    {
        'name': 'Feb',
        'Sale': 99_000
    },
    {
        'name': 'Mar',
        'Sale': 12_090
    },
    {
        'name': 'Apr',
        'Sale': 99_000
    },
    {
        'name': 'May',
        'Sale': 54_000
    },
    {
        'name': 'Jun',
        'Sale': 85_000
    },
    {
        'name': 'Jul',
        'Sale': 34_000
    },
    {
        'name': 'Agu',
        'Sale': 18_598
    },
    {
        'name': 'Sep',
        'Sale': 0
    },
    {
        'name': 'Oct',
        'Sale': 73_078
    },
    {
        'name': 'Nov',
        'Sale': 12_900
    },
    {
        'name': 'Dec',
        'Sale': 87_000
    },
]

let newUsers: newUsersType = [
    { id: 1, userName: 'Mohammad Hossain', title: 'Front End Dev' },
    { id: 2, userName: 'Jack Hernandez', title: 'Security' },
    { id: 3, userName: 'Sara Black', title: 'UI/UX Designer' },
    { id: 4, userName: 'Cri Fel', title: 'Back End Dev' }
]

let colors: string[] = ['aqua', 'green', 'orange', 'red', 'purple', 'black', 'blue']

type userRow = any

let userRows: userRow = [
    { id: 1, full_name: 'Mohammad Hossain', state: 'Admin', avatar: 'Mh', status: 'active', transaction: '$129.52', email: 'Darck12@gmail.com' },
    { id: 2, full_name: 'Emily Carter', state: 'Manager', avatar: 'Ec', status: 'non-active', transaction: '$110', email: 'Manager.Ui@gmail.com' },
    { id: 3, full_name: 'James Anderson', state: 'Admin', avatar: 'Ja', status: 'active', transaction: '$87.14', email: 'TylorSS00@gmail.com' },
    { id: 4, full_name: 'Sophia Martinez', state: 'Common', avatar: 'Sm', status: 'active', transaction: '$413', email: 'Sophia.Ma9@gmail.com' },
    { id: 5, full_name: 'Daniel Lee', state: 'Common', avatar: 'Dl', status: 'non-active', transaction: '$11', email: 'Admin@gmail.com' },
]

type productsType = { id: number, title: string, price: number, avatar: string }[]

let products: productsType = [
    { id: 1, title: 'ROG', price: 3700, avatar: 'AS' },
    { id: 2, title: 'MSI', price: 6000, avatar: 'MI' },
    { id: 3, title: 'Acer', price: 2110, avatar: 'Ar' },
    { id: 4, title: 'Lenovo', price: 1500, avatar: 'Le' },
]

const productsChartData: data = [
    { name: 'Jan', Sale: Math.floor(Math.random() * 99000) },
    { name: 'Feb', Sale: Math.floor(Math.random() * 99000) },
    { name: 'Mar', Sale: Math.floor(Math.random() * 99000) },
]

function AddNewUser(newUser: any) {
    userRows.push(newUser)
}

let AnalysticChartData = [
    {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    ov: 2100,
    iv: 5200
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    ov: 2900,
    iv: 6000
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
    ov: 1900,
    iv: 4600
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
    ov: 1850,
    iv: 7890
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
    ov: 1100,
    iv: 5400
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
    ov: 2300,
    iv: 5250
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
    ov: 2390,
    iv: 5208
  },
  {
    name: 'Aug',
    uv: 4320,
    pv: 4300,
    amt: 2100,
    ov: 2700,
    iv: 5700
  },
  {
    name: 'Dec',
    uv: 1890,
    pv: 4300,
    amt: 2100,
    ov: 3100,
    iv: 1900
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
    ov: 2100,
    iv: 5200
  },
  {
    name: 'Oct',
    uv: 6560,
    pv: 4300,
    amt: 2100,
    ov: 2100,
    iv: 5200
  },
]

let RadarData = [
  {
    subject: 'JS',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'TS',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Py',
    A: 90,
    B: 70,
    fullMark: 150,
  },
  {
    subject: 'Java',
    A: 95,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Go',
    A: 120,
    B: 120,
    fullMark: 150,
  },
  {
    subject: 'Cpp',
    A: 50,
    B: 150,
    fullMark: 150,
  },
]

let NextChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

 const dataTable1 = [
    { metric: 'Visits', value: 1200 },
    { metric: 'Conversions', value: 300 },
    { metric: 'Bounce Rate', value: '45%' },
  ];

  const dataTable2 = [
    { category: 'Organic', sessions: 800 },
    { category: 'Referral', sessions: 250 },
    { category: 'Paid', sessions: 150 },
  ];

export { xAxisData }
export { newUsers }
export { colors }
export { userRows }
export { products }
export { productsChartData }
export type { userRow }
export { AddNewUser }
export {AnalysticChartData , RadarData , NextChartData}
export {dataTable1 , dataTable2}