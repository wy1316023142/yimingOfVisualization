export default {
    //15个乡镇
    viilagePointMap: [{
        name: '洋县',
        value: 5,
        point: [107.556618, 33.231824]
    }, {
        name: '佛坪',
        value: 8,
        point: [108.014556, 33.38697]
    }, {
        name: '周至',
        value: 2,
        point: [108.310116, 34.091342]
    }],
    viilageGeoCoordMap: {
        '洋县': [107.556618, 33.231824],
        '佛坪': [108.014556, 33.38697],
        '周至': [108.310116, 34.091342],
        '宁陕': [108.310116, 33.591342]
    },
    projectGeoCoordMap: {
        '三河口水利枢纽': [108.056250, 33.351743],
        '黄金峡水利枢纽': [107.928872, 33.229899],
        '秦岭隧洞': [108.118989, 33.939575],
        '其他工程': [107.518989, 33.539575]
    },

    //77个行政村
    hamletData: [
        {
            name: "洋县",
            value: 48,
            point: [107.556618, 33.231824]
        },
        {
            name: "佛坪县",
            value: 13,
            point: [108.014556, 33.38697]
        },
        {
            name: "宁陕县",
            value: 13,
            point: [108.310116, 33.591342]
        },
        {
            name: "周至县",
            value: 3,
            point: [108.310116, 34.091342]
        }
    ],
    // 移民安置规划（工程规划水平搬迁安置移民10375人）
    ProjectRelocationData: {
        movePopuData: [{
                name: "黄金峡水利枢纽",
                value: 5254,
                point: [107.928872, 33.229899]
            },
            {
                name: "三河口水利枢纽",
                value: 4525,
                point: [108.05625, 33.351743]
            },
            {
                name: "秦岭隧洞",
                value: 446,
                point: [108.118989, 33.939575]
            },
            {
                name: "其他工程",
                value: 150,
                point: [107.518989, 33.539575]
            }
        ]
    },
    // 移民安置规划中（规划水平年生产安置人口9401人，大农业安置7805人，自谋职业安置1596人）
    resettlementPopulation: {
        productionSettlement: [
            {
                name: "三河口水利枢纽",
                value: 3500,
                point: [108.05625, 33.351743]
            },
            {
                name: "黄金峡水利枢纽",
                value: 5436,
                point: [107.928872, 33.229899]
            },
            {
                name: "秦岭隧洞",
                value: 315,
                point: [108.118989, 33.939575]
            },
            {
                name: "其他工程",
                value: 150,
                point: [107.518989, 33.539575]
            }
        ],
        mAgriculturalResettlement: [{
                name: "黄金峡水利枢纽",
                value: 4551,
                point: [107.928872, 33.229899]
            },
            {
                name: "三河口水利枢纽",
                value: 2789,
                point: [108.05625, 33.351743]
            },
            {
                name: "秦岭隧洞",
                value: 315,
                point: [108.118989, 33.939575]
            },
            {
                name: "其他工程",
                value: 150,
                point: [107.518989, 33.539575]
            }
        ],
        individualJobSettlement: [{
                name: "黄金峡水利枢纽",
                value: 885,
                point: [107.928872, 33.229899]
            },
            {
                name: "三河口水利枢纽",
                value: 711,
                point: [108.05625, 33.351743]
            },
        ]
    },
    // 移民安置费用统计（总投资万元）
    totalInvestExpense: [
        {
            year: 2013,
            detailData:[
                { 
                    name:"三河口水利枢纽",
                    value:15879.51,
                    point:[108.05625, 33.351743]
                },
                { 
                    name:"黄金峡水利枢纽",
                    value:730.63,
                    point:[107.928872, 33.229899]
                }
            ]
        },
        {
            year: 2014,
            detailData:[
                { 
                    name:"三河口水利枢纽",
                    value:55597.76,
                    point:[108.05625, 33.351743]
                },
                { 
                    name:"黄金峡水利枢纽",
                    value:20038.47,
                    point:[107.928872, 33.229899]
                }
            ]
        },
        {
            year: 2015,
            detailData:[
                { 
                    name:"三河口水利枢纽",
                    value:115127.77,
                    point:[108.05625, 33.351743]
                },
                { 
                    name:"黄金峡水利枢纽",
                    value:9960.71,
                    point:[107.928872, 33.229899]
                }
            ]
        },
        {
            year: 2016,
            detailData:[
                { 
                    name:"三河口水利枢纽",
                    value:123500.18,
                    point:[108.05625, 33.351743]
                },
                { 
                    name:"黄金峡水利枢纽",
                    value:21208.78,
                    point:[107.928872, 33.229899]
                }
            ]
        },
        {
            year: 2017,
            detailData:[
                { 
                    name:"三河口水利枢纽",
                    value:175424.77,
                    point:[108.05625, 33.351743]
                },
                { 
                    name:"黄金峡水利枢纽",
                    value:43819.99,
                    point:[107.928872, 33.229899]
                }
            ]
        },
        {
            year: 2018,
            detailData:[
                { 
                    name:"三河口水利枢纽",
                    value:161636.84,
                    point:[108.05625, 33.351743]
                },
                { 
                    name:"黄金峡水利枢纽",
                    value:62066.48,
                    point:[107.928872, 33.229899]
                }
            ]
        },
        {
            year: 2019,
            detailData:[
                { 
                    name:"三河口水利枢纽",
                    value:164608.92,
                    point:[108.05625, 33.351743]
                },
                { 
                    name:"黄金峡水利枢纽",
                    value:67699.39,
                    point:[107.928872, 33.229899]
                }
            ]
        },
    ],
    //安置点数据
    endData: [
        {
            id: 1,
            name: "十亩地安置 283户1034人",
            place: "十亩地安置", //地址
            viname: "十亩地安置",
            ghhouseholds: 205,
            ghren: 756,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 89.7,
            zjyd: 116.05,
            type: 1,
            coordinate: [107.97034986750029, 33.395788412662185],
        },
        {
            id: 2,
            name: "石墩河安置 215户758人",
            place: "石墩河安置",
            viname: "石墩河安置",
            ghhouseholds: 214,
            ghren: 748,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 96.9,
            zjyd: 116.35,
            type: 1,
            coordinate: [108.09711051992706, 33.434692923511484]
        },
        {
            id: 3,
            name: "五四安置 96户337人",
            place: "五四安置",
            viname: "五四安置",
            ghhouseholds: 96,
            ghren: 337,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 0,
            zjyd: 88,
            type: 2,
            coordinate: [108.0380916595459, 33.30653429031372]
        },
        {
            id: 4,
            name: "马家沟安置 95户334人",
            place: "马家沟安置",
            viname: "马家沟安置",
            ghhouseholds: 95,
            ghren: 334,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.38,
            zjyd: 39.27,
            type: 2,
            coordinate: [108.0290706850715, 33.308346205592969]
        },
        {
            id: 5,
            name: "梅子集镇安置 116户458人",
            place: "梅子集镇安置",
            viname: "梅子集镇安置",
            ghhouseholds: 71,
            ghren: 247,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 100,
            zjyd: 61.6,
            type: 1,
            coordinate: [108.08650416031608, 33.317017578865197]
        },
        {
            id: 6,
            name: "寇家湾安置 72户252人",
            place: "寇家湾安置",
            viname: "寇家湾安置",
            ghhouseholds: 72,
            ghren: 252,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 65,
            zjyd: 38.9,
            type: 2,
            coordinate: [108.10578047327554, 33.353151552313065]
        },
        {
            id: 7,
            name: "油坊坳安置 20户77人",
            place: "油坊坳安置",
            viname: "油坊坳安置",
            ghhouseholds: 20,
            ghren: 77,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 65.37,
            zjyd: 7.55,
            type: 2,
            coordinate: [108.1744433083163, 33.375763127302285]
        },
        {
            id: 8,
            name: "许家城安置 19户66人",
            place: "许家城安置",
            viname: "许家城安置",
            ghhouseholds: 19,
            ghren: 66,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 75.39,
            zjyd: 7.46,
            type: 2,
            coordinate: [108.22068110267843, 33.402482341434585]
        },
        {
            id: 9,
            name: "干田梁安置 47户164人",
            place: "干田梁安置",
            viname: "干田梁安置",
            ghhouseholds: 47,
            ghren: 164,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 56,
            zjyd: 20.63,
            type: 2,
            coordinate: [108.16075275272847, 33.35021583386726]
        }, {
            id: 1,
            name: "张村安置点 可安置29户102人",
            place: "张村安置点",
            viname: "张村安置点",
            ghhouseholds: 29,
            ghren: 102,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.04,
            zjyd: 11.94,
            type: 2,
            coordinate: [107.49403528240106, 33.197974452320864]
        }, {
            id: 2,
            name: "柳树庙3安置点 可安置42户157人",
            place: "柳树庙3安置点",
            viname: "柳树庙3安置点",
            ghhouseholds: 42,
            ghren: 157,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 80,
            zjyd: 18.83,
            type: 2,
            coordinate: [107.51284080061561, 33.204098869424733]
        }, {
            id: 3,
            name: "常牟村安置点 可安置43户148人",
            place: "常牟村安置点",
            viname: "常牟村安置点",
            ghhouseholds: 43,
            ghren: 148,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.02,
            zjyd: 17.31,
            type: 2,
            coordinate: [107.49908590144292, 33.193007757703541]
        }, {
            id: 4,
            name: "磨桥村安置点 可安置61户196人",
            place: "磨桥村安置点",
            viname: "磨桥村安置点",
            ghhouseholds: 61,
            ghren: 196,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 79.13,
            zjyd: 0,
            type: 2,
            coordinate: [107.5333194860186, 33.188964632384639]
        }, {
            id: 5,
            name: "柳树庙1村安置点 可安置31户103人",
            place: "柳树庙1村安置点",
            viname: "柳树庙1村安置点",
            ghhouseholds: 31,
            ghren: 103,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.66,
            zjyd: 12.15,
            type: 2,
            coordinate: [107.51765143288392, 33.212310704880991]
        }, {
            id: 6,
            name: "五郎庙村安置点 可安置29户101人",
            place: "五郎庙村安置点",
            viname: "五郎庙村安置点",
            ghhouseholds: 29,
            ghren: 101,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 79.8,
            zjyd: 12.09,
            type: 2,
            coordinate: [107.48744036986359, 33.256226365570221]
        }, {
            id: 7,
            name: "柳树庙2安置点 可安置70户248人",
            place: "柳树庙2安置点",
            viname: "柳树庙2安置点",
            ghhouseholds: 70,
            ghren: 248,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 77.51,
            zjyd: 28.82,
            type: 2,
            coordinate: [107.51335450680645, 33.204103566849241]
        }, {
            id: 8,
            name: "草坝村安置点 可安置56户190人",
            place: "草坝村安置点",
            viname: "草坝村安置点",
            ghhouseholds: 56,
            ghren: 190,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 79.96,
            zjyd: 23.09,
            type: 2,
            coordinate: [107.56098410889551, 33.259876350032719]
        }, {
            id: 9,
            name: "孤魂庙村安置点 可安置30户106人",
            place: "孤魂庙村安置点",
            viname: "孤魂庙村安置点",
            ghhouseholds: 30,
            ghren: 106,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 77.7,
            zjyd: 12.36,
            type: 2,
            coordinate: [107.56521036352703, 33.265878839801637]
        }, {
            id: 10,
            name: "万春村安置点 可集中安置60户207人",
            place: "万春村安置点",
            viname: "万春村安置点",
            ghhouseholds: 60,
            ghren: 207,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 23.97,
            zjyd: 26.16,
            type: 2,
            coordinate: [107.69102254271317, 33.198376597321705]
        }, {
            id: 11,
            name: "金水集镇迁建安置点 搬迁规模1948人",
            place: "金水集镇迁建安置点",
            viname: "金水集镇迁建安置点",
            ghhouseholds: 342,
            ghren: 1113,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 0,
            zjyd: 0,
            type: 1,
            coordinate: [107.86386507379159, 33.27009834641003]
        }
    ],
    //移民安置计划资金
    planMoney: [
        {
            name: "三河口水利枢纽",
            alias: "三河口",
            value: [{
                    value: 84016.41,
                    name: "农村移民补偿费",
                }, {
                    value: 18233.89,
                    name: "集镇迁建补偿费",
                },
                {
                    value: 1213.04,
                    name: "工业企业迁建补偿费",
                },
                {
                    value: 78294.47,
                    name: "专业项目补偿及修建费",
                },
                {
                    value: 1459.28,
                    name: "保护工程建设费",
                },
                {
                    value: 1210.17,
                    name: "库底清理费",
                },
                {
                    value: 19612.53,
                    name: "其他费用",
                },
                {
                    value: 17105.31,
                    name: "预备费",
                },
                {
                    value: 19502.1,
                    name: "有关税费",
                }, {
                    value: 0,
                    name: "城市牵地费",
                }
            ]
        },
        {
            name: "黄金峡水利枢纽",
            alias: "黄金峡",
            value: [{
                    value: 55330.55,
                    name: "农村移民补偿费",
                }, {
                    value: 18383.95,
                    name: "集镇迁建补偿费",
                },
                {
                    value: 0,
                    name: "工业企业迁建补偿费",
                },
                {
                    value: 17618.13,
                    name: "专业项目补偿及修建费",
                },
                {
                    value: 42354.96,
                    name: "保护工程建设费",
                },
                {
                    value: 603.17,
                    name: "库底清理费",
                },
                {
                    value: 13886.49,
                    name: "其他费用",
                },
                {
                    value: 12418.8,
                    name: "预备费",
                },
                {
                    value: 13665.86,
                    name: "有关税费",
                }, {
                    value: 0,
                    name: "城市牵地费",
                }
            ]
        },
        {
            name: "秦岭隧洞",
            alias: "秦岭隧洞",
            value: [{
                    value: 8379.08,
                    name: "农村移民补偿费",
                }, {
                    value: 0,
                    name: "集镇迁建补偿费",
                },
                {
                    value: 0,
                    name: "工业企业迁建补偿费",
                },
                {
                    value: 463.31,
                    name: "专业项目补偿及修建费",
                },
                {
                    value: 0,
                    name: "保护工程建设费",
                },
                {
                    value: 0,
                    name: "库底清理费",
                },
                {
                    value: 1180.35,
                    name: "其他费用",
                },
                {
                    value: 983.75,
                    name: "预备费",
                },
                {
                    value: 713.52,
                    name: "有关税费",
                }, {
                    value: 0,
                    name: "城市牵地费",
                }
            ]
        },
        {
            name: "其他工程",
            alias: "其他工程",
            value: [{
                    value: 0,
                    name: "农村移民补偿费",
                }, {
                    value: 0,
                    name: "集镇迁建补偿费",
                },
                {
                    value: 0,
                    name: "工业企业迁建补偿费",
                },
                {
                    value: 0,
                    name: "专业项目补偿及修建费",
                },
                {
                    value: 0,
                    name: "保护工程建设费",
                },
                {
                    value: 0,
                    name: "库底清理费",
                },
                {
                    value: 0,
                    name: "其他费用",
                },
                {
                    value: 0,
                    name: "预备费",
                },
                {
                    value: 0,
                    name: "有关税费",
                }, {
                    value: 4500,
                    name: "城市牵地费"
                }
            ]
        }
    ],
    viilagePoint: [
        {
            name: "桑溪乡",
            point: [108.018622, 33.208285]
        },
        {
            name: "黄金峡镇",
            point: [107.858148, 33.189507]
        },
        {
            name: "金水镇",
            point: [107.860727, 33.280707]
        },
        {
            name: "槐树关镇",
            point: [107.721618, 33.253343]
        },
        {
            name: "黄家营镇",
            point: [107.74556, 33.132081]
        },
        {
            name: "龙亭镇",
            point: [107.659504, 33.215683]
        },
        {
            name: "黄安镇",
            point: [107.622869, 33.194974]
        },
        {
            name: "贯溪镇",
            point: [107.86078, 33.070425]
        },
        {
            name: "洋州镇",
            point: [107.556618, 33.231824]
        },
        {
            name: "磨子桥镇",
            point: [107.528745, 33.192528]
        },
        {
            name: "石亩地乡",
            point: [108.014556, 33.38697]
        },
        {
            name: "大河坝乡",
            point: [108.050732, 33.311879]
        },
        {
            name: "石礅河乡",
            point: [108.084029, 33.401338]
        },
        {
            name: "筒车湾镇",
            point: [108.229117, 33.401496]
        },
        {
            name: "梅子乡",
            point: [108.067265, 33.310105]
        },
        {
            name: "四亩地镇",
            point: [108.122621, 33.486098]
        },
        {
            name: "王家河乡",
            point: [108.220665, 33.881112]
        },
        {
            name: "陈河乡",
            point: [108.156492, 33.979144]
        },
        {
            name: "楼观镇",
            point: [108.310116, 34.091342]
        },
        {
            name: "陈家坝镇",
            point: [108.121168, 33.481231]
        },

    ],
    //工程征地面积
    landArea: [
        {
            type: "耕地",
            data: 16131,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 5824,
                    point: [107.928872, 33.229899],
                },
                {
                    name: "三河口水库",
                    data: 8149,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 1603,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 1347,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "林地",
            data: 25205,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 8511,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 15422,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 646,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 626,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "草地",
            data: 6,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 0,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 0,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 6,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 0,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "住宅用地",
            data: 1231,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 681,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 519,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 31,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 0,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "道路用地",
            data: 1824,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 516,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 940,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 368,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 0,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "仓库用地",
            data: 43,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 0,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 43,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 0,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 0,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "其他用地",
            data: 7722,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 5743,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 1220,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 759,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 0,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "水域",
            data: 26056,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 23507,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 2527,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 22,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 0,
                    point: [107.518989, 33.539575]
                }
            ]
        },
        {
            type: "公共用地",
            data: 79,
            mapdata: [{
                    name: "黄金峡水库",
                    data: 0,
                    point: [107.928872, 33.229899],

                },
                {
                    name: "三河口水库",
                    data: 0,
                    point: [108.056250, 33.351743],
                },
                {
                    name: "秦岭隧洞",
                    data: 0,
                    point: [108.118989, 33.939575],
                },
                {
                    name: "其他工程",
                    data: 79,
                    point: [107.518989, 33.539575]
                }
            ]
        },
    ],

    //受影响人口和受影响房屋
    effectData: {
        //受影响人口，chartData是下面的图表，mapData是地图上的柱状图
      popuData: {
            chartData: [
                {
                      type: "水库区",
                      data: 8586,
                      mapdata: [{
                              name: "黄金峡水库",
                          data: 4676,
                              point: [107.928872, 33.229899],
                          },
                          {
                              name: "三河口水库",
                              data: 3910,
                              point: [108.056250, 33.351743],
                          },
                          {
                              name: "秦岭隧洞",
                              data: 0,
                              point: [108.118989, 33.939575]
                          },
                          {
                              name: "其他工程",
                              data: 0,
                              point: [107.518989, 33.539575]
                          }
                      ]
                  },
                  {
                      type: "坝区",
                      data: 92,
                      mapdata: [{
                              name: "黄金峡水库",
                          data: 92,
                               point: [107.928872, 33.229899],
                          },
                          {
                              name: "三河口水库",
                              data: 0,
                             point: [108.056250, 33.351743],
                          },
                          {
                              name: "秦岭隧洞",
                              data: 0,
                              point: [108.118989, 33.939575]
                          },
                          {
                              name: "其他工程",
                              data: 0,
                               point: [107.518989, 33.539575]
                          }
                      ]
                  },
                  {
                      type: "安置区",
                      data: 484,
                      mapdata: [{
                              name: "黄金峡水库",
                          data: 158,
                              point: [107.928872, 33.229899],
                          },
                          {
                              name: "三河口水库",
                              data: 326,
                             point: [108.056250, 33.351743],
                          },
                          {
                              name: "秦岭隧洞",
                              data: 0,
                              point: [108.118989, 33.939575]
                          },
                          {
                              name: "其他工程",
                              data: 0,
                               point: [107.518989, 33.539575]
                          }
                      ]
                  },
                  {
                      type: "其他",
                      data: 594,
                      mapdata: [{
                              name: "黄金峡水库",
                          data: 0,
                              point: [107.928872, 33.229899],
                          },
                          {
                              name: "三河口水库",
                              data: 0,
                              point: [108.056250, 33.351743],
                          },
                          {
                              name: "秦岭隧洞",
                              data: 444,
                              point: [108.118989, 33.939575]
                          },
                          {
                              name: "其他工程",
                              data: 150,
                               point: [107.518989, 33.539575]
                          }
                      ]
                  }
              ],
              mapData: [{
                      name: "黄金峡水库",
                  data: 4926,
                      point: [107.928872, 33.229899],
                  },
                  {
                      name: "三河口水库",
                      data: 4326,
                      point:[108.056250, 33.351743],
                  },
                  {
                      name: "秦岭隧洞",
                      data: 444,
                      point: [108.118989, 33.939575]
                  },
                  {
                      name: "其他工程",
                      data: 150,
                       point: [107.518989, 33.539575]
                  }
              ]
          },
          //受影响房屋
           houseData: {
               chartData: [{
                       type: "农村",
                       data: 494870,
                       mapdata: [{
                               name: "黄金峡水库",
                           data: 178263,
                               point: [107.928872, 33.229899],
                           },
                           {
                               name: "三河口水库",
                               data: 287456,
                               point: [108.056250, 33.351743],
                           },
                           {
                               name: "秦岭隧洞",
                               data: 21486,
                                point: [108.118989, 33.939575]
                           },
                           {
                               name: "其他工程",
                               data: 7662,
                               point: [107.518989, 33.539575]
                           }
                       ]
                   },
                   {
                       type: "村组集体",
                       data: 14064,
                       mapdata: [{
                               name: "黄金峡水库",
                           data: 5609,
                               point: [107.928872, 33.229899],
                           },
                           {
                               name: "三河口水库",
                               data: 8455,
                               point: [108.056250, 33.351743],
                           },
                           {
                               name: "秦岭隧洞",
                               data: 0,
                                point: [108.118989, 33.939575]
                           },
                           {
                               name: "其他工程",
                               data: 0,
                               point: [107.518989, 33.539575]
                           }
                       ]
                   },
                   {
                       type: "集镇",
                       data: 185821,
                       mapdata: [{
                               name: "黄金峡水库",
                           data: 107969,
                               point: [107.928872, 33.229899],
                           },
                           {
                               name: "三河口水库",
                               data: 77852,
                               point: [108.056250, 33.351743],
                           },
                           {
                               name: "秦岭隧洞",
                               data: 0,
                                point: [108.118989, 33.939575]
                           },
                           {
                               name: "其他工程",
                               data: 0,
                               point: [107.518989, 33.539575]
                           }
                       ]
                   }
               ],
               mapData: [{
                       name: "黄金峡水库",
                   data: 291641,
                        point: [107.928872, 33.229899],
                   },
                   {
                       name: "三河口水库",
                       data: 373763,
                       point: [108.056250, 33.351743],
                   },
                   {
                       name: "秦岭隧洞",
                       data: 21486,
                        point: [108.118989, 33.939575]
                   },
                   {
                       name: "其他工程",
                       data: 7662,
                         point: [107.518989, 33.539575]  
                   }
               ]
        },
           

    },
     //工程占地面积
     projectAreaData: {
         //点击总面积
         allArea: [{
                 name: "黄金峡水库",
             data: 44782,
                 point: [107.928872, 33.229899],
             },
             {
                 name: "三河口水库",
                 data: 28820,
                 point: [108.056250, 33.351743]
             },
             {
                 name: "秦岭隧洞",
                 data: 3426,
                 point: [108.118989, 33.939575],
             },
             {
                 name: "其他工程",
                 data: 1269,
                 point: [107.518989, 33.539575]
             }
         ],
         //点击永久征地
         foreverArea: [
             {
                 name: "黄金峡水库",
             data: 42146,
                 point: [107.928872, 33.229899],
             },
             {
                 name: "三河口水库",
                 data: 27883,
                  point: [108.056250, 33.351743]
             },
             {
                 name: "秦岭隧洞",
                 data: 657,
                 point: [108.118989, 33.939575],
                 
             },
             {
                 name: "其他工程",
                 data: 780,
                  point: [107.518989, 33.539575]
             }
         ],
         //点击临时征地
         temporaryArea: [{
                 name: "黄金峡水库",
             data: 2636,
                 point: [107.928872, 33.229899],
             },
             {
                 name: "三河口水库",
                 data: 937,
                  point: [108.056250, 33.351743]
             },
             {
                 name: "秦岭隧洞",
                 data: 2769,
                 point: [108.118989, 33.939575],
                 
             },
             {
                 name: "其他工程",
                 data: 489,
                  point: [107.518989, 33.539575]
             }
         ]
     },
    //阶段实物指标
    stageData: [
        {
            type: "人口(个)",
            stage: "初设",
            data: 9756
        },
        {
            type: "人口(个)",
            stage: "可研",
            data: 8965
        },
        {
            type: "人口(个)",
            stage: "实施",
            data: 8835
        },
        {
            type: "土地(亩)",
            stage: "初设",
            data: 78297
        },
        {
            type: "土地(亩)",
            stage: "可研",
            data: 71472
        },
        {
            type: "土地(亩)",
            stage: "实施",
            data: 71356
        },
        {
            type: "房屋(㎡)",
            stage: "初设",
            data: 694579
        },
        {
            type: "房屋(㎡)",
            stage: "可研",
            data: 689545
        },
        {
            type: "房屋(㎡)",
            stage: "实施",
            data: 678595
        },
    ],
    // 移民安置规划中（规划建设20个移民集中安置点，集镇安置点4个，农村集中安置点16个）
    // 起点
    movedata: [
        {
            id: 11,
            name: "十亩地",
            viname: "十亩地安置点",
            ren: 634,
            households: 172,
            coordinate: [108.0127687014886, 33.383697787386716],
            type: 1,
            to: [11]
        }, {
            id: 12,
            name: "谭家河",
            viname: "十亩地安置点",
            ren: 116,
            households: 31,
            coordinate: [107.98600729104952, 33.40020696562722],
            type: 1,
            to: [11]
        }, {
            id: 13,
            name: "联合",
            ren: 6,
            households: 2,
            viname: "十亩地安置点",
            coordinate: [108.02330435815641, 33.403149292509902],
            type: 1,
            to: [11]
        }, {
            id: 21,
            name: "蒿林湾",
            viname: "石墩河安置点",
            ren: 252,
            households: 72,
            coordinate: [108.06450432853043, 33.407138010101995],
            type: 1,
            to: [12]
        }, {
            id: 22,
            name: "回龙寺",
            viname: "石墩河安置点",
            ren: 45,
            households: 13,
            coordinate: [108.07872341099544, 33.437105576282327],
            type: 1,
            to: [12]
        }, {
            id: 23,
            name: "石墩河村",
            viname: "石墩河安置点",
            ren: 451,
            households: 129,
            coordinate: [108.07546720192099, 33.395992120952783],
            type: 1,
            to: [12]
        }, {
            id: 31,
            name: "三河口村",
            viname: "五四安置点",
            ren: 337,
            households: 96,
            coordinate: [108.04062339709385, 33.357627713428741],
            type: 2,
            to: [13]
        }, {
            id: 41,
            name: "三河口村",
            viname: "马家沟安置点",
            ren: 334,
            households: 95,
            coordinate: [108.04047597360831, 33.357453262612687],
            type: 2,
            to: [14]
        }, {
            id: 51,
            name: "安坪村",
            viname: "梅子集镇安置点",
            ren: 214,
            households: 54,
            coordinate: [108.08142175860304, 33.327521060705855],
            type: 1,
            to: [15]
        }, {
            id: 52,
            name: "南昌村",
            viname: "梅子集镇安置点",
            ren: 24,
            households: 6,
            coordinate: [108.16283595183965, 33.330161432796714],
            type: 1,
            to: [15]
        }, {
            id: 53,
            name: "女王村",
            viname: "梅子集镇安置点",
            ren: 31,
            households: 8,
            coordinate: [108.13294992160642, 33.3418683809454],
            type: 1,
            to: [15]
        }, {
            id: 54,
            name: "生凤村",
            viname: "梅子集镇安置点",
            ren: 97,
            households: 25,
            coordinate: [108.10465544353747, 33.365576489497904],
            type: 1,
            to: [15]
        }, {
            id: 55,
            name: "瓦房村",
            viname: "梅子集镇安置点",
            ren: 92,
            households: 23,
            coordinate: [108.07674650667312, 33.310539085099421],
            type: 1,
            to: [15]
        }, {
            id: 61,
            name: "北昌村",
            viname: "寇家湾安置点",
            ren: 58,
            households: 17,
            coordinate: [108.11610333768515, 33.349625423824406],
            type: 2,
            to: [16]
        }, {
            id: 62,
            name: "南昌村",
            viname: "寇家湾安置点",
            ren: 39,
            households: 11,
            coordinate: [108.16283595183965, 33.330161432796714],
            type: 2,
            to: [6]
        }, {
            id: 63,
            name: "女王村",
            viname: "寇家湾安置点",
            ren: 155,
            households: 44,
            coordinate: [108.13294992160642, 33.3418683809454],
            type: 2,
            to: [16]
        }, {
            id: 71,
            name: "油房坳",
            viname: "油坊坳安置点",
            ren: 77,
            households: 20,
            coordinate: [108.17437551607944, 33.37594101309768],
            type: 2,
            to: [17]
        }, {
            id: 81,
            name: "龙王潭",
            viname: "许家城安置点",
            ren: 43,
            households: 12,
            coordinate: [108.16313109328068, 33.372610468987268],
            type: 2,
            to: [18]
        }, {
            id: 82,
            name: "油房坳",
            viname: "许家城安置点",
            ren: 23,
            households: 7,
            coordinate: [108.17437551607944, 33.37594101309768],
            type: 2,
            to: [18]
        }, {
            id: 91,
            name: "龙王潭",
            viname: "干田梁安置点",
            ren: 164,
            households: 47,
            coordinate: [108.16313109328068, 33.372610468987268],
            type: 2,
            to: [19]
        },




        {
            id: 11,
            name: "蔡坝村",
            viname: "张村安置点",
            ren: 102,
            households: 29,
            coordinate: [107.69553220166755, 33.183998846602151],
            type: 2,
            to: [1]
        }, {
            id: 21,
            name: "杨庄村",
            viname: "柳树庙3",
            ren: 30,
            households: 9,
            coordinate: [107.79475572561067, 33.218405852746457],
            type: 2,
            to: [2]
        }, {
            id: 22,
            name: "商坪村",
            viname: "柳树庙3",
            ren: 90,
            households: 23,
            coordinate: [107.78561859534828, 33.158871738380583],
            type: 2,
            to: [2]
        }, {
            id: 23,
            name: "北沟村",
            viname: "柳树庙3",
            ren: 18,
            households: 5,
            coordinate: [107.8083186533439, 33.172577433774165],
            type: 2,
            to: [2]
        }, {
            id: 24,
            name: "新铺村",
            viname: "柳树庙3",
            ren: 19,
            households: 5,
            coordinate: [107.85814456680599, 33.18485545256425],
            type: 2,
            to: [2]
        }, {
            id: 31,
            name: "商坪村",
            viname: "常牟村",
            ren: 76,
            households: 22,
            coordinate: [107.78561859534828, 33.158871738380583],
            type: 2,
            to: [3]
        }, {
            id: 32,
            name: "北沟村",
            viname: "常牟村",
            ren: 52,
            households: 15,
            coordinate: [107.8083186533439, 33.172577433774165],
            type: 2,
            to: [3]
        }, {
            id: 33,
            name: "新铺村",
            viname: "常牟村",
            ren: 20,
            households: 6,
            coordinate: [107.85814456680599, 33.18485545256425],
            type: 2,
            to: [3]
        }, {
            id: 41,
            name: "蔡坝村",
            viname: "磨桥村",
            ren: 98,
            households: 31,
            coordinate: [107.69553220166755, 33.183998846602151],
            type: 2,
            to: [4]
        }, {
            id: 42,
            name: "真符村",
            viname: "磨桥村",
            ren: 34,
            households: 10,
            coordinate: [107.75934934584392, 33.171863595472416],
            type: 2,
            to: [4]
        }, {
            id: 43,
            name: "杨庄村",
            viname: "磨桥村",
            ren: 34,
            households: 10,
            coordinate: [107.79475572561067, 33.218405852746457],
            type: 2,
            to: [4]
        }, {
            id: 44,
            name: "商坪村",
            viname: "磨桥村",
            ren: 18,
            households: 6,
            coordinate: [107.78561859534828, 33.158871738380583],
            type: 2,
            to: [4]
        }, {
            id: 45,
            name: "史家村",
            viname: "磨桥村",
            ren: 12,
            households: 4,
            coordinate: [107.93381142679139, 33.210553631427217],
            type: 2,
            to: [4]
        }, {
            id: 51,
            name: "茶坊村",
            viname: "柳树庙1",
            ren: 13,
            households: 4,
            coordinate: [107.73630438932581, 33.193857773801895],
            type: 2,
            to: [5]
        }, {
            id: 52,
            name: "真符村",
            viname: "柳树庙1",
            ren: 20,
            households: 6,
            coordinate: [107.75934934584392, 33.171863595472416],
            type: 2,
            to: [5]
        }, {
            id: 53,
            name: "蔡坝村",
            viname: "柳树庙1",
            ren: 20,
            households: 6,
            coordinate: [107.69553220166755, 33.183998846602151],
            type: 2,
            to: [5]
        }, {
            id: 54,
            name: "杨庄村",
            viname: "柳树庙1",
            ren: 17,
            households: 5,
            coordinate: [107.79475572561067, 33.218405852746457],
            type: 2,
            to: [5]
        }, {
            id: 55,
            name: "商坪村",
            viname: "柳树庙1",
            ren: 13,
            households: 4,
            coordinate: [107.78561859534828, 33.158871738380583],
            type: 2,
            to: [5]
        }, {
            id: 56,
            name: "新铺村",
            viname: "柳树庙1",
            ren: 7,
            households: 2,
            coordinate: [107.85814456680599, 33.18485545256425],
            type: 2,
            to: [5]
        }, {
            id: 61,
            name: "蔡坝村",
            viname: "五郎庙",
            ren: 24,
            households: 7,
            coordinate: [107.69538434730104, 33.183630612730788],
            type: 2,
            to: [6]
        }, {
            id: 62,
            name: "杨庄村",
            viname: "五郎庙",
            ren: 17,
            households: 5,
            coordinate: [107.79475572561067, 33.218405852746457],
            type: 2,
            to: [6]
        }, {
            id: 63,
            name: "金华村",
            viname: "五郎庙",
            ren: 28,
            households: 8,
            coordinate: [107.95684647482527, 33.24086206357822],
            type: 2,
            to: [6]
        }, {
            id: 163,
            name: "金华村",
            viname: "柳树庙1",
            ren: 13,
            households: 4,
            coordinate: [107.95684647482527, 33.24086206357822],
            type: 2,
            to: [5]
        }, {
            id: 64,
            name: "茶坊村",
            viname: "五郎庙",
            ren: 32,
            households: 9,
            coordinate: [107.73630438932581, 33.193857773801895],
            type: 2,
            to: [6]
        }, {
            id: 71,
            name: "蔡坝村",
            viname: "柳树庙2",
            ren: 166,
            households: 48,
            coordinate: [107.69553220166755, 33.183998846602151],
            type: 2,
            to: [7]
        }, {
            id: 72,
            name: "真符村",
            viname: "柳树庙2",
            ren: 82,
            households: 22,
            coordinate: [107.75934934584392, 33.171863595472416],
            type: 2,
            to: [7]
        }, {
            id: 81,
            name: "真符村",
            viname: "草坝村",
            ren: 32,
            households: 10,
            coordinate: [107.75934934584392, 33.171863595472416],
            type: 2,
            to: [8]
        }, {
            id: 82,
            name: "史家村",
            viname: "草坝村",
            ren: 66,
            households: 20,
            coordinate: [107.93381142679139, 33.210553631427217],
            type: 2,
            to: [8]
        }, {
            id: 83,
            name: "茶坊村",
            viname: "草坝村",
            ren: 42,
            households: 12,
            coordinate: [107.73630438932581, 33.193857773801895],
            type: 2,
            to: [8]
        }, {
            id: 84,
            name: "万春村",
            viname: "草坝村",
            ren: 30,
            households: 9,
            coordinate: [107.6909994517748, 33.19814080361239],
            type: 2,
            to: [8]
        }, {
            id: 85,
            name: "马沟村",
            viname: "草坝村",
            ren: 20,
            households: 5,
            coordinate: [107.71412781275147, 33.214987387533668],
            type: 2,
            to: [8]
        }, {
            id: 91,
            name: "茶坊村",
            viname: "孤魂庙",
            ren: 30,
            households: 8,
            coordinate: [107.73630438932581, 33.193857773801895],
            type: 2,
            to: [9]
        }, {
            id: 92,
            name: "马沟村",
            viname: "孤魂庙",
            ren: 5,
            households: 1,
            coordinate: [107.71412781275147, 33.214987387533668],
            type: 2,
            to: [9]
        }, {
            id: 93,
            name: "蔡坝村",
            viname: "孤魂庙",
            ren: 8,
            households: 3,
            coordinate: [107.69553220166755, 33.183998846602151],
            type: 2,
            to: [9]
        }, {
            id: 94,
            name: "真符村",
            viname: "孤魂庙",
            ren: 22,
            households: 6,
            coordinate: [107.75934934584392, 33.171863595472416],
            type: 2,
            to: [9]
        }, {
            id: 95,
            name: "杨庄村",
            viname: "孤魂庙",
            ren: 34,
            households: 10,
            coordinate: [107.79475572561067, 33.218405852746457],
            type: 2,
            to: [9]
        }, {
            id: 96,
            name: "史家村",
            viname: "孤魂庙",
            ren: 7,
            households: 2,
            coordinate: [107.93381142679139, 33.210553631427217],
            type: 2,
            to: [9]
        }, {
            id: 101,
            name: "万春村",
            viname: "万春",
            ren: 207,
            households: 60,
            coordinate: [107.6909994517748, 33.19814080361239],
            type: 2,
            to: [10]
        }, {
            id: 111,
            name: "关岭村",
            viname: "金水集镇",
            ren: 440,
            households: 147,
            coordinate: [107.87354575148959, 33.282645378350281],
            type: 1,
            to: [11]
        }, {
            id: 112,
            name: "金水村",
            viname: "金水集镇",
            ren: 673,
            households: 195,
            coordinate: [107.83595026759747, 33.28112252330655],
            type: 1,
            to: [11]
        }
    ],
    //终点
    outofdata: [
        {
            id: 11,
            name: "十亩地安置点",
            place: "十亩地安置点 283户1034人",
            ghhouseholds: 205,
            ghren: 756,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 89.7,
            zjyd: 116.05,
            type: 1,
            coordinate: [107.97034986750029, 33.395788412662185]
        },
        {
            id: 12,
            name: "石墩河安置点",
            place: "石墩河安置点 215户758人",
            ghhouseholds: 214,
            ghren: 748,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 96.9,
            zjyd: 116.35,
            type: 1,
            coordinate: [108.09711051992706, 33.434692923511484]
        },
        {
            id: 13,
            name: "五四安置点",
            place: "五四安置点 96户337人",
            ghhouseholds: 96,
            ghren: 337,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 0,
            zjyd: 88,
            type: 2,
            coordinate: [108.0380916595459, 33.30653429031372]
        },
        {
            id: 14,
            name: "马家沟安置点",
            place: "马家沟安置点 95户334人",
            ghhouseholds: 95,
            ghren: 334,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.38,
            zjyd: 39.27,
            type: 2,
            coordinate: [108.0290706850715, 33.308346205592969]
        },
        {
            id: 15,
            name: "梅子集镇安置点",
            place: "梅子集镇安置点 116户458人",
            ghhouseholds: 71,
            ghren: 247,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 100,
            zjyd: 61.6,
            type: 1,
            coordinate: [108.08650416031608, 33.317017578865197]
        },
        {
            id: 16,
            name: "寇家湾安置点",
            place: "寇家湾安置点 72户252人",
            ghhouseholds: 72,
            ghren: 252,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 65,
            zjyd: 38.9,
            type: 2,
            coordinate: [108.10578047327554, 33.353151552313065]
        },
        {
            id: 17,
            name: "油坊坳安置点",
            place: "油坊坳安置点 20户77人",
            ghhouseholds: 20,
            ghren: 77,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 65.37,
            zjyd: 7.55,
            type: 2,
            coordinate: [108.1744433083163, 33.375763127302285]
        },
        {
            id: 18,
            name: "许家城安置点",
            place: "许家城安置点 19户66人",
            ghhouseholds: 19,
            ghren: 66,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 75.39,
            zjyd: 7.46,
            type: 2,
            coordinate: [108.22068110267843, 33.402482341434585]
        },
        {
            id: 19,
            name: "干田梁安置点",
            place: "干田梁安置点 47户164人",
            ghhouseholds: 47,
            ghren: 164,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 56,
            zjyd: 20.63,
            type: 2,
            coordinate: [108.16075275272847, 33.35021583386726]
        },



        {
            id: 1,
            name: "张村安置点",
            place: "张村安置点 可安置29户102人",
            ghhouseholds: 29,
            ghren: 102,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.04,
            zjyd: 11.94,
            type: 2,
            coordinate: [107.49403528240106, 33.197974452320864]
        }, {
            id: 2,
            name: "柳树庙3安置点",
            place: "柳树庙3安置点 可安置42户157人",
            ghhouseholds: 42,
            ghren: 157,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 80,
            zjyd: 18.83,
            type: 2,
            coordinate: [107.51284080061561, 33.204098869424733]
        }, {
            id: 3,
            name: "常牟村安置点",
            place: "常牟村安置点 可安置43户148人",
            ghhouseholds: 43,
            ghren: 148,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.02,
            zjyd: 17.31,
            type: 2,
            coordinate: [107.49908590144292, 33.193007757703541]
        }, {
            id: 4,
            name: "磨桥村安置点",
            place: "磨桥村安置点 可安置61户196人",
            ghhouseholds: 61,
            ghren: 196,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 79.13,
            zjyd: 0,
            type: 2,
            coordinate: [107.5333194860186, 33.188964632384639]
        }, {
            id: 5,
            name: "柳树庙1村安置点",
            place: "柳树庙1村安置点 可安置31户103人",
            ghhouseholds: 31,
            ghren: 103,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 78.66,
            zjyd: 12.15,
            type: 2,
            coordinate: [107.51765143288392, 33.212310704880991]
        }, {
            id: 6,
            name: "五郎庙村安置点",
            place: "五郎庙村安置点 可安置29户101人",
            ghhouseholds: 29,
            ghren: 101,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 79.8,
            zjyd: 12.09,
            type: 2,
            coordinate: [107.48744036986359, 33.256226365570221]
        }, {
            id: 7,
            name: "柳树庙2安置点",
            place: "柳树庙2安置点 可安置70户248人",
            ghhouseholds: 70,
            ghren: 248,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 77.51,
            zjyd: 28.82,
            type: 2,
            coordinate: [107.51335450680645, 33.204103566849241]
        }, {
            id: 8,
            name: "草坝村安置点",
            place: "草坝村安置点 可安置56户190人",
            ghhouseholds: 56,
            ghren: 190,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 79.96,
            zjyd: 23.09,
            type: 2,
            coordinate: [107.56098410889551, 33.259876350032719]
        }, {
            id: 9,
            name: "孤魂庙村安置点",
            place: "孤魂庙村安置点 可安置30户106人",
            ghhouseholds: 30,
            ghren: 106,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 77.7,
            zjyd: 12.36,
            type: 2,
            coordinate: [107.56521036352703, 33.265878839801637]
        }, {
            id: 10,
            name: "万春村安置点",
            place: "万春村安置点 可集中安置60户207人",
            ghhouseholds: 60,
            ghren: 207,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 23.97,
            zjyd: 26.16,
            type: 2,
            coordinate: [107.69102254271317, 33.198376597321705]
        }, {
            id: 11,
            name: "金水集镇迁建安置点",
            place: "金水集镇迁建安置点 搬迁规模1948人",
            ghhouseholds: 342,
            ghren: 1113,
            xzren: 0,
            xzhouseholds: 0,
            rjyd: 0,
            zjyd: 0,
            type: 1,
            coordinate: [107.86386507379159, 33.27009834641003]
        }
    ],
    // 工程项目建设情况（饼图数据）
    Implementation:[
        {
            type:"前期阶段",
            projectProductData:[
                {
                    name: "黄金峡水利枢纽",
                    alias: "黄金峡纽",
                    value: [{
                            name: "黄金峡水库",
                            value: 0
                        }]
                },{
                    name: "三河口水利枢纽",
                    alias: "三河口",
                    value:[{
                            name: "三河口水库",
                            value: 5
                    }]
                },{
                    name: "秦岭隧洞",
                    alias: "秦岭隧洞",
                    value:[{
                        name: "秦岭隧洞",
                            value: 0
                    }]
                },{
                    name: "其他工程",
                    alias: "其他工程",
                    value:[
                        {
                            name: "其他工程",
                            value: 0
                    }]
                }
            ]
        },{
            type:"设计阶段",
            projectProductData:[
                {
                    name: "黄金峡水利枢纽",
                    alias: "黄金峡纽",
                    value: [{
                            name: "黄金峡水库",
                            value: 0
                        }]
                },{
                    name: "三河口水利枢纽",
                    alias: "三河口",
                    value:[{
                            name: "三河口水库",
                            value: 19
                    }]
                },{
                    name: "秦岭隧洞",
                    alias: "秦岭隧洞",
                    value:[{
                        name: "秦岭隧洞",
                            value: 0
                    }]
                },{
                    name: "其他工程",
                    alias: "其他工程",
                    value:[
                        {
                            name: "其他工程",
                            value: 0
                    }]
                }
            ]
        },{
            type:"招标阶段",
            projectProductData:[
                {
                    name: "黄金峡水利枢纽",
                    alias: "黄金峡纽",
                    value: [{
                            name: "黄金峡水库",
                            value: 0
                        }]
                },{
                    name: "三河口水利枢纽",
                    alias: "三河口",
                    value:[{
                            name: "三河口水库",
                            value: 13
                    }]
                },{
                    name: "秦岭隧洞",
                    alias: "秦岭隧洞",
                    value:[{
                        name: "秦岭隧洞",
                            value: 0
                    }]
                },{
                    name: "其他工程",
                    alias: "其他工程",
                    value:[
                        {
                            name: "其他工程",
                            value: 0
                    }]
                }
            ]
        },{
            type:"实施阶段",
            projectProductData:[
                {
                    name: "黄金峡水利枢纽",
                    alias: "黄金峡纽",
                    value: [{
                            name: "黄金峡水库",
                            value: 0
                        }]
                },{
                    name: "三河口水利枢纽",
                    alias: "三河口",
                    value:[{
                            name: "三河口水库",
                            value: 24
                    }]
                },{
                    name: "秦岭隧洞",
                    alias: "秦岭隧洞",
                    value:[{
                        name: "秦岭隧洞",
                            value: 0
                    }]
                },{
                    name: "其他工程",
                    alias: "其他工程",
                    value:[
                        {
                            name: "其他工程",
                            value: 0
                    }]
                }
            ]
        },{
            type:"验收阶段",
            projectProductData:[
                {
                    name: "黄金峡水利枢纽",
                    alias: "黄金峡纽",
                    value: [{
                            name: "黄金峡水库",
                            value: 0
                        }]
                },{
                    name: "三河口水利枢纽",
                    alias: "三河口",
                    value:[{
                            name: "三河口水库",
                            value: 15
                    }]
                },{
                    name: "秦岭隧洞",
                    alias: "秦岭隧洞",
                    value:[{
                        name: "秦岭隧洞",
                            value: 0
                    }]
                },{
                    name: "其他工程",
                    alias: "其他工程",
                    value:[
                        {
                            name: "其他工程",
                            value: 0
                    }]
                }
            ]
        }
    ]
}