/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-17px', '-10px', '584px', '721px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 's-black',
                            type: 'image',
                            rect: ['567px', '97px', '67px', '67px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"s-black.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2Copy4',
                            type: 'rect',
                            rect: ['249px', '49px', '12px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['57px', '44px', '12px', '46px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['54px', '19px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'N',
                            type: 'image',
                            rect: ['72px', '39px', '56px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"N.png",'0px','0px']
                        },
                        {
                            id: 'P-1',
                            type: 'image',
                            rect: ['83px', '24px', '122px', '0px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"P-1.png",'0px','0px']
                        },
                        {
                            id: 'P-23',
                            type: 'image',
                            rect: ['128px', '24px', '82px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"P-23.png",'0px','0px']
                        },
                        {
                            id: 'h2',
                            type: 'image',
                            rect: ['173px', '19px', '82px', '82px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"h.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['21px', '22px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'N2',
                            type: 'image',
                            rect: ['264px', '42px', '120px', '120px', 'auto', 'auto'],
                            opacity: '0.014958079268293',
                            fill: ["rgba(0,0,0,0)",im+"N2.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['320px', '49px', '12px', '41px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse3',
                            type: 'ellipse',
                            rect: ['284px', '296px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['352px', '13px', '28px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['337px', '54px', '42px', '5px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'e',
                            type: 'image',
                            rect: ['364px', '29px', '82px', '82px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"e.png",'0px','0px']
                        },
                        {
                            id: 'D',
                            type: 'image',
                            rect: ['362px', '371px', '178px', '178px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"D.png",'0px','0px'],
                            transform: [[],[],[],['0.46067','0.46067']]
                        },
                        {
                            id: 'e-black2',
                            type: 'image',
                            rect: ['-114px', '136px', '97px', '97px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"e-black.png",'0px','0px']
                        },
                        {
                            id: 'i-black',
                            type: 'image',
                            rect: ['0px', '0px', '87px', '87px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"i-black.png",'0px','0px']
                        },
                        {
                            id: 'g-black',
                            type: 'image',
                            rect: ['573px', '53px', '82px', '82px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"g-black.png",'0px','0px']
                        },
                        {
                            id: 'n-black',
                            type: 'image',
                            rect: ['446px', '-84px', '73px', '74px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"n-black.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['8px', '39px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 36px; font-weight: 200;\">Design.</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['179px', '39px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 36px; font-weight: 200;\">Develop.</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['371px', '39px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 36px; font-weight: 200;\">Deploy.</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['189px', '139px', '101px', '18px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​Let's Get Started</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none solid rgb(0, 0, 0)", "", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['-29px', '0px', '529px', '225px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'cursor',
                            type: 'image',
                            rect: ['544px', '299px', '18px', '18px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"cursor.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '500px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: true,
                    data: [
                        [
                            "eid630",
                            "left",
                            6250,
                            0,
                            "linear",
                            "${Text3}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid280",
                            "width",
                            2633,
                            0,
                            "easeOutQuint",
                            "${n-black}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid568",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${n-black}",
                            '1',
                            '0'
                        ],
                        [
                            "eid640",
                            "background-color",
                            4750,
                            3000,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(238,238,238,1.00)'
                        ],
                        [
                            "eid14",
                            "width",
                            500,
                            1000,
                            "easeOutBounce",
                            "${P-1}",
                            '122px',
                            '125px'
                        ],
                        [
                            "eid28",
                            "left",
                            696,
                            804,
                            "easeOutCubic",
                            "${P-23}",
                            '66px',
                            '107px'
                        ],
                        [
                            "eid627",
                            "opacity",
                            5500,
                            750,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid638",
                            "opacity",
                            6250,
                            750,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid550",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${i-black}",
                            '1',
                            '0'
                        ],
                        [
                            "eid250",
                            "height",
                            2250,
                            1250,
                            "easeOutQuart",
                            "${s-black}",
                            '74px',
                            '67px'
                        ],
                        [
                            "eid566",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid34",
                            "opacity",
                            564,
                            1436,
                            "easeOutBounce",
                            "${h2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid558",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${h2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid93",
                            "top",
                            1750,
                            750,
                            "easeInQuad",
                            "${Rectangle5}",
                            '122px',
                            '169px'
                        ],
                        [
                            "eid181",
                            "top",
                            2500,
                            422,
                            "easeOutExpo",
                            "${Rectangle5}",
                            '169px',
                            '165px'
                        ],
                        [
                            "eid657",
                            "width",
                            8500,
                            0,
                            "linear",
                            "${cursor}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid631",
                            "top",
                            6250,
                            0,
                            "linear",
                            "${Text3}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid675",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid676",
                            "top",
                            10000,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid677",
                            "top",
                            11000,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid633",
                            "opacity",
                            6250,
                            750,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid639",
                            "opacity",
                            7000,
                            750,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid253",
                            "width",
                            2565,
                            0,
                            "easeOutQuint",
                            "${i-black}",
                            '87px',
                            '87px'
                        ],
                        [
                            "eid88",
                            "height",
                            1500,
                            857,
                            "easeInQuad",
                            "${Rectangle4}",
                            '2px',
                            '97px'
                        ],
                        [
                            "eid97",
                            "height",
                            2357,
                            143,
                            "easeInQuad",
                            "${Rectangle4}",
                            '97px',
                            '82px'
                        ],
                        [
                            "eid90",
                            "opacity",
                            1500,
                            857,
                            "easeInQuad",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid559",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Rectangle4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "left",
                            1500,
                            857,
                            "easeInQuad",
                            "${Rectangle4}",
                            '358px',
                            '331px'
                        ],
                        [
                            "eid278",
                            "height",
                            2633,
                            0,
                            "easeOutQuint",
                            "${n-black}",
                            '74px',
                            '74px'
                        ],
                        [
                            "eid73",
                            "top",
                            1250,
                            750,
                            "easeOutBounce",
                            "${N2}",
                            '0px',
                            '157px'
                        ],
                        [
                            "eid168",
                            "top",
                            2000,
                            922,
                            "easeOutExpo",
                            "${N2}",
                            '157px',
                            '153px'
                        ],
                        [
                            "eid16",
                            "left",
                            1500,
                            0,
                            "easeOutBounce",
                            "${P-1}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid621",
                            "opacity",
                            4750,
                            750,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid637",
                            "opacity",
                            5500,
                            750,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid656",
                            "height",
                            8500,
                            0,
                            "linear",
                            "${cursor}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid553",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${D}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "location",
                            1000,
                            1000,
                            "linear",
                            "${Ellipse2}",
                            [[30, 30.97, 0, 0, 0, 0,0],[170.17, 36.54, 159.57, 87.66, 145.8, 80.09,142.66],[234, 143.03, 0, 0, 0, 0,270.74]]
                        ],
                        [
                            "eid174",
                            "location",
                            2000,
                            922,
                            "easeOutExpo",
                            "${Ellipse2}",
                            [[234, 143.03, 0, 0, 0, 0,0],[234, 139, 0, 0, 0, 0,4.03]]
                        ],
                        [
                            "eid628",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${Text2}",
                            '179px',
                            '179px'
                        ],
                        [
                            "eid92",
                            "left",
                            1750,
                            750,
                            "easeInQuad",
                            "${Rectangle5}",
                            '334px',
                            '316px'
                        ],
                        [
                            "eid262",
                            "width",
                            2565,
                            1250,
                            "easeOutQuint",
                            "${g-black}",
                            '82px',
                            '87px'
                        ],
                        [
                            "eid94",
                            "width",
                            1750,
                            750,
                            "easeInQuad",
                            "${Rectangle5}",
                            '12px',
                            '42px'
                        ],
                        [
                            "eid629",
                            "top",
                            5500,
                            0,
                            "linear",
                            "${Text2}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid680",
                            "opacity",
                            9814,
                            77,
                            "linear",
                            "${cursor}",
                            '1',
                            '0'
                        ],
                        [
                            "eid242",
                            "location",
                            2357,
                            1317,
                            "easeOutExpo",
                            "${e-black2}",
                            [[-65.5, 184.5, 0, 0, 0, 0,0],[211.49, 55.1, 231.41, 59.46, 226.8, 58.28,311.11],[240, 258, 0, 0, 0, 0,532.78]]
                        ],
                        [
                            "eid95",
                            "opacity",
                            1750,
                            750,
                            "easeInQuad",
                            "${Rectangle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid552",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Rectangle5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "opacity",
                            1250,
                            750,
                            "easeOutBounce",
                            "${N2}",
                            '0.014957999810576439',
                            '1'
                        ],
                        [
                            "eid560",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${N2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "opacity",
                            500,
                            1000,
                            "easeOutBounce",
                            "${P-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid554",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${P-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "opacity",
                            1332,
                            918,
                            "easeOutElastic",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid567",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid80",
                            "left",
                            1332,
                            918,
                            "easeOutElastic",
                            "${Rectangle3}",
                            '125px',
                            '299px'
                        ],
                        [
                            "eid17",
                            "width",
                            1500,
                            0,
                            "easeOutBounce",
                            "${Rectangle2}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid569",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${e}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            '41px',
                            '41px'
                        ],
                        [
                            "eid234",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${N}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid89",
                            "width",
                            1500,
                            857,
                            "easeInQuad",
                            "${Rectangle4}",
                            '28px',
                            '12px'
                        ],
                        [
                            "eid74",
                            "height",
                            1250,
                            750,
                            "easeOutBounce",
                            "${N2}",
                            '120px',
                            '56px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            403,
                            847,
                            "easeOutBounce",
                            "${N}",
                            '0',
                            '1'
                        ],
                        [
                            "eid551",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${N}",
                            '1',
                            '0'
                        ],
                        [
                            "eid237",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${h2}",
                            '152px',
                            '152px'
                        ],
                        [
                            "eid235",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${N}",
                            '51px',
                            '51px'
                        ],
                        [
                            "eid661",
                            "left",
                            9250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '-29px',
                            '-29px'
                        ],
                        [
                            "eid668",
                            "left",
                            10000,
                            1000,
                            "easeInCubic",
                            "${Rectangle6}",
                            '-29px',
                            '-15px'
                        ],
                        [
                            "eid252",
                            "height",
                            2565,
                            0,
                            "easeOutQuint",
                            "${i-black}",
                            '87px',
                            '87px'
                        ],
                        [
                            "eid59",
                            "left",
                            884,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            '228px',
                            '228px'
                        ],
                        [
                            "eid261",
                            "height",
                            2565,
                            1250,
                            "easeOutQuint",
                            "${g-black}",
                            '82px',
                            '87px'
                        ],
                        [
                            "eid110",
                            "top",
                            1750,
                            815,
                            "easeOutBounce",
                            "${e}",
                            '140px',
                            '144px'
                        ],
                        [
                            "eid176",
                            "top",
                            2565,
                            357,
                            "easeOutExpo",
                            "${e}",
                            '144px',
                            '140px'
                        ],
                        [
                            "eid102",
                            "width",
                            1750,
                            0,
                            "linear",
                            "${e}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid263",
                            "location",
                            2565,
                            1250,
                            "easeOutQuint",
                            "${g-black}",
                            [[616.5, 96.5, 0, 0, 0, 0,0],[416.97, 377.45, -179.35, 108.25, -233.44, 140.9,347.03],[336.5, 265.5, 0, 0, 0, 0,507.27]]
                        ],
                        [
                            "eid249",
                            "location",
                            2250,
                            1250,
                            "easeOutQuart",
                            "${s-black}",
                            [[604, 134, 0, 0, 0, 0,0],[419.3, 297.54, -121.39, 45.03, -288.31, 106.96,249.69],[276.5, 255.5, 0, 0, 0, 0,401.28]]
                        ],
                        [
                            "eid233",
                            "location",
                            2250,
                            1250,
                            "easeOutExpo",
                            "${D}",
                            [[552.02, 450, 0, 0, 0, 0,0],[2.29, 354.84, -168.67, -132.04, -221.06, -173.05,560.65],[186.7, 252.94, 0, 0, 0, 0,795.15]]
                        ],
                        [
                            "eid644",
                            "opacity",
                            7750,
                            1000,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid679",
                            "opacity",
                            9500,
                            1000,
                            "easeInCubic",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid284",
                            "location",
                            2633,
                            1182,
                            "easeOutQuint",
                            "${n-black}",
                            [[482.5, -47, 0, 0, 0, 0,0],[379.5, 259, 0, 0, 0, 0,322.87]]
                        ],
                        [
                            "eid87",
                            "top",
                            1500,
                            857,
                            "easeInQuad",
                            "${Rectangle4}",
                            '210px',
                            '113px'
                        ],
                        [
                            "eid98",
                            "top",
                            2357,
                            143,
                            "easeInQuad",
                            "${Rectangle4}",
                            '113px',
                            '128px'
                        ],
                        [
                            "eid179",
                            "top",
                            2500,
                            422,
                            "easeOutExpo",
                            "${Rectangle4}",
                            '128px',
                            '124px'
                        ],
                        [
                            "eid660",
                            "location",
                            8500,
                            750,
                            "linear",
                            "${cursor}",
                            [[553, 308, 0, 0, 0, 0,0],[365.9, 250.82, -161.75, -84.81, -227.36, -119.22,196.33],[286, 168, 0, 0, 0, 0,313.07]]
                        ],
                        [
                            "eid642",
                            "left",
                            7750,
                            0,
                            "linear",
                            "${Text4}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '154px',
                            '159px'
                        ],
                        [
                            "eid178",
                            "top",
                            1000,
                            1922,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '159px',
                            '155px'
                        ],
                        [
                            "eid60",
                            "top",
                            884,
                            775,
                            "easeOutBounce",
                            "${Rectangle2Copy4}",
                            '354px',
                            '159px'
                        ],
                        [
                            "eid65",
                            "top",
                            1659,
                            341,
                            "linear",
                            "${Rectangle2Copy4}",
                            '159px',
                            '164px'
                        ],
                        [
                            "eid177",
                            "top",
                            2000,
                            922,
                            "easeOutExpo",
                            "${Rectangle2Copy4}",
                            '164px',
                            '160px'
                        ],
                        [
                            "eid244",
                            "width",
                            2357,
                            1317,
                            "easeOutExpo",
                            "${e-black2}",
                            '97px',
                            '82px'
                        ],
                        [
                            "eid635",
                            "height",
                            0,
                            6250,
                            "linear",
                            "${Stage}",
                            '500px',
                            '700px'
                        ],
                        [
                            "eid636",
                            "height",
                            6250,
                            750,
                            "linear",
                            "${Stage}",
                            '700px',
                            '500px'
                        ],
                        [
                            "eid3",
                            "top",
                            250,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '59px',
                            '134px'
                        ],
                        [
                            "eid170",
                            "top",
                            1250,
                            1672,
                            "easeOutExpo",
                            "${Ellipse}",
                            '134px',
                            '130px'
                        ],
                        [
                            "eid70",
                            "opacity",
                            934,
                            1109,
                            "linear",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid561",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Ellipse2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "height",
                            500,
                            1000,
                            "easeOutBounce",
                            "${P-1}",
                            '0px',
                            '121px'
                        ],
                        [
                            "eid236",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${h2}",
                            '130px',
                            '130px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '-21px',
                            '39px'
                        ],
                        [
                            "eid18",
                            "left",
                            1000,
                            500,
                            "easeOutBounce",
                            "${Rectangle2}",
                            '39px',
                            '36px'
                        ],
                        [
                            "eid562",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${e-black2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid563",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${g-black}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            696,
                            804,
                            "easeOutCubic",
                            "${P-23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${P-23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid565",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${s-black}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            250,
                            153,
                            "easeOutBounce",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid556",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid251",
                            "width",
                            2250,
                            1250,
                            "easeOutQuart",
                            "${s-black}",
                            '74px',
                            '67px'
                        ],
                        [
                            "eid254",
                            "location",
                            2565,
                            1301,
                            "easeOutQuint",
                            "${i-black}",
                            [[-78.01, 65.34, 0, 0, 0, 0,0],[294.17, 14.08, 176.7, 136.08, 211.63, 162.98,383.26],[304.5, 244.5, 0, 0, 0, 0,622.74]]
                        ],
                        [
                            "eid15",
                            "top",
                            500,
                            1000,
                            "easeOutBounce",
                            "${P-1}",
                            '242px',
                            '139px'
                        ],
                        [
                            "eid175",
                            "top",
                            1500,
                            1422,
                            "easeOutExpo",
                            "${P-1}",
                            '139px',
                            '135px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            1250,
                            1000,
                            "easeInQuad",
                            "${Ellipse3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Ellipse3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid101",
                            "height",
                            1750,
                            0,
                            "linear",
                            "${e}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid72",
                            "left",
                            1250,
                            750,
                            "easeOutBounce",
                            "${N2}",
                            '430px',
                            '243px'
                        ],
                        [
                            "eid75",
                            "width",
                            1250,
                            750,
                            "easeOutBounce",
                            "${N2}",
                            '120px',
                            '56px'
                        ],
                        [
                            "eid666",
                            "width",
                            9250,
                            750,
                            "easeInCubic",
                            "${Rectangle6}",
                            '12px',
                            '529px'
                        ],
                        [
                            "eid366",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '721px',
                            '721px'
                        ],
                        [
                            "eid4",
                            "left",
                            250,
                            1000,
                            "easeOutBounce",
                            "${Ellipse}",
                            '28px',
                            '33px'
                        ],
                        [
                            "eid82",
                            "location",
                            1413,
                            837,
                            "easeInQuad",
                            "${Ellipse3}",
                            [[293, 305, 0, 0, 0, 0,0],[537.47, 383.75, 9.66, -130.37, 8.23, -111.08,264.05],[305, 143, 0, 0, 0, 0,601.59]]
                        ],
                        [
                            "eid169",
                            "location",
                            2250,
                            672,
                            "easeOutExpo",
                            "${Ellipse3}",
                            [[305, 143, 0, 0, 0, 0,0],[305, 139, 0, 0, 0, 0,4]]
                        ],
                        [
                            "eid619",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${Text}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid618",
                            "left",
                            4750,
                            0,
                            "linear",
                            "${Text}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid27",
                            "top",
                            696,
                            804,
                            "easeOutCubic",
                            "${P-23}",
                            '218px',
                            '139px'
                        ],
                        [
                            "eid171",
                            "top",
                            1500,
                            1422,
                            "easeOutExpo",
                            "${P-23}",
                            '139px',
                            '135px'
                        ],
                        [
                            "eid243",
                            "height",
                            2357,
                            1317,
                            "easeOutExpo",
                            "${e-black2}",
                            '97px',
                            '82px'
                        ],
                        [
                            "eid79",
                            "top",
                            1332,
                            918,
                            "easeOutElastic",
                            "${Rectangle3}",
                            '334px',
                            '164px'
                        ],
                        [
                            "eid180",
                            "top",
                            2250,
                            672,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '164px',
                            '160px'
                        ],
                        [
                            "eid109",
                            "left",
                            1750,
                            815,
                            "easeOutBounce",
                            "${e}",
                            '583px',
                            '343px'
                        ],
                        [
                            "eid62",
                            "opacity",
                            564,
                            1186,
                            "easeOutBounce",
                            "${Rectangle2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid564",
                            "opacity",
                            3500,
                            1250,
                            "easeInSine",
                            "${Rectangle2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid367",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid673",
                            "height",
                            9250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '225px',
                            '225px'
                        ],
                        [
                            "eid678",
                            "height",
                            10000,
                            1000,
                            "easeInCubic",
                            "${Rectangle6}",
                            '225px',
                            '39px'
                        ],
                        [
                            "eid96",
                            "height",
                            1750,
                            750,
                            "easeInQuad",
                            "${Rectangle5}",
                            '18px',
                            '5px'
                        ],
                        [
                            "eid643",
                            "top",
                            7750,
                            0,
                            "linear",
                            "${Text4}",
                            '139px',
                            '139px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Inphinite_edgeActions.js");
})("EDGE-722287909");
