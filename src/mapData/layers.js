const names = [
    {
        "name": "Al Basrah RAAS v1",
        "team1": "MIL",
        "team2": "INS",
        "attackersId": "null",
        "layerImage": "/images/AlBasrahRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Al Basrah Invasion v1",
        "team1": "GB",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/AlBasrahINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Al Basrah Invasion v2",
        "team1": "GB",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/AlBasrahINVv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Al Basrah Insurgency v1",
        "team1": "GB",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/AlBasrahINSv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Belaya AAS v1",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/BelayaAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Belaya AAS v2",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/BelayaAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Belaya AAS v3",
        "team1": "GB",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/BelayaAASv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Belaya RAAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/BelayaRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Belaya Invasion v1",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": 1,
        "layerImage": "/images/BelayaINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Belaya Invasion v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": 1,
        "layerImage": "/images/BelayaINVv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Belaya Invasion v3",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": 1,
        "layerImage": "/images/BelayaINVv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Chora AAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/ChoraAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Chora AAS v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/ChoraAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Chora RAAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/ChoraRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Chora Invasion v1 Night",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/ChoraINVv1night_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Chora Insurgency v1",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/ChoraINSv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Chora Skirmish v1 Night",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/ChoraSkirmishv1night_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Fool's Road AAS v1",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/FoolsroadAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Fool's Road AAS v2",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/FoolsroadAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Fool's Road AAS v3",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/FoolsroadAASv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Fool's Road AAS v4",
        "team1": "GB",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/FoolsroadAASv4_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Fool's Road RAAS v1",
        "team1": "GB",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/FoolsroadRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Fool's Road Skirmish v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/FoolsroadSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Fool's Road Skirmish v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/FoolsroadSkirmishv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok AAS v1",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/GorodokAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok AAS v2",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/GorodokAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok AAS v3",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/GorodokAASv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok AAS v4",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/GorodokAASv4_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok RAAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/GorodokRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok RAAS v2",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/GorodokRAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok Invasion v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": 1,
        "layerImage": "/images/GorodokINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok Invasion v2",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": 1,
        "layerImage": "/images/GorodokINVv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Gorodok Skirmish v1",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/GorodokSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Jensen's Range v1",
        "team1": "GB",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/Jensensrangev1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Jensen's Range v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/Jensensrangev2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Jensen's Range v3",
        "team1": "US",
        "team2": "INS",
        "attackersId": "null",
        "layerImage": "/images/Jensensrangev3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Jensen's Range Skirmish v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/JensensrangeSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh AAS v1",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/KamdeshAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh RAAS v1",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/KamdeshRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh RAAS v2",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/KamdeshRAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh RAAS v3",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/KamdeshRAASv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh Invasion v1",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KamdeshINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh Invasion v2",
        "team1": "GB",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KamdeshINVv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh Invasion v3",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KamdeshINVv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh Insurgency v1",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KamdeshINSv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh Insurgency v2",
        "team1": "GB",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KamdeshINSv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kamdesh Skirmish v1",
        "team1": "US",
        "team2": "GB",
        "attackersId": "null",
        "layerImage": "/images/KamdeshSkirmishv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Kohat AAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/KohatAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kohat AAS v2",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/KohatAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kohat RAAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/KohatRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kohat Invasion v1",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KohatINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kohat Insurgency v1",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KohatINSv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kohat Skirmish v1",
        "team1": "US",
        "team2": "GB",
        "attackersId": "null",
        "layerImage": "/images/KohatSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kokan AAS v1",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/KokanAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kokan AAS v2",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/KokanAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kokan RAAS v1",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/KokanRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kokan Invasion v1",
        "team1": "RUS",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KokanINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kokan Insurgency v1",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/KokanINSv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Kokan Skirmish v1",
        "team1": "MIL",
        "team2": "INS",
        "attackersId": "null",
        "layerImage": "/images/KokanSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Logar Valley AAS v1",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/LogarAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Logar Valley AAS INF v1",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/LogarAASinfv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Logar Valley RAAS v1",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/LogarRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Logar Valley Insurgency v1",
        "team1": "RUS",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/LogarINSv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Logar Valley Insurgency v1 Night",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/LogarINSv1night_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Mestia AAS v1",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/MestiaAASv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Mestia AAS v2",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/MestiaAASv2.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Mestia RAAS v1",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/MestiaRAASv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Mestia Invasion v1",
        "team1": "RUS",
        "team2": "MIL",
        "attackersId": 1,
        "layerImage": "/images/MestiaINVv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Mestia Invasion v2",
        "team1": "US",
        "team2": "MIL",
        "attackersId": 1,
        "layerImage": "/images/MestiaINVv2.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Narva AAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/NarvaAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Narva AAS v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/NarvaAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Narva AAS v3",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/NarvaAASv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Narva RAAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/NarvaRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Narva Invasion v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": 2,
        "layerImage": "/images/NarvaINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Narva Invasion v2",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": 1,
        "layerImage": "/images/NarvaINVv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Narva Skirmish v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/NarvaSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Sumari AAS v3",
        "team1": "GB",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/SumariAASv3_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Sumari RAAS v1",
        "team1": "US",
        "team2": "MIL",
        "attackersId": "null",
        "layerImage": "/images/SumariRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Sumari Insurgency v1",
        "team1": "US",
        "team2": "INS",
        "attackersId": 1,
        "layerImage": "/images/SumariINSv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Sumari Skirmish v1",
        "team1": "MIL",
        "team2": "INS",
        "attackersId": "null",
        "layerImage": "/images/SumariSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Tallil Outskirts AAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/TallilAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Tallil Outskirts RAAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/TallilRAASv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Tallil Outskirts RAAS v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/TallilRAASv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Tallil Outskirts Invasion v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": 1,
        "layerImage": "/images/TallilINVv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Tallil Outskirts Skirmish v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/TallilSkirmishv1_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Tallil Outskirts Skirmish v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/TallilSkirmishv2_12-1.PNG",
        "imageVers": 12.1,
        "factionDataVers": 12.1
    },
    {
        "name": "Yehorivka AAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/YehorivkaAASv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka AAS v2",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/YehorivkaAASv2.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka AAS v3",
        "team1": "GB",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/YehorivkaAASv3.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka AAS v5",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/YehorivkaAASv5.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka RAAS v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/YehorivkaRAASv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka RAAS v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/YehorivkaRAASv2.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka Invasion v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": 2,
        "layerImage": "/images/YehorivkaINVv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka Invasion v2",
        "team1": "US",
        "team2": "RUS",
        "attackersId": 2,
        "layerImage": "/images/YehorivkaINVv2.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    },
    {
        "name": "Yehorivka Skirmish v1",
        "team1": "US",
        "team2": "RUS",
        "attackersId": "null",
        "layerImage": "/images/YehorivkaSkirmishv1.PNG",
        "imageVers": 12.2,
        "factionDataVers": 12.2
    }

];

export default names;