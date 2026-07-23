// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phone: [
		{
			name: "OPPO Find X9",
			image: "/images/device/findx9.webp",
			specs: "Gray / 16G + 512GB",
				description:
					"Flagship performance, Hasselblad imaging, 80W SuperVOOC.",
			link: "https://www.oppo.com/cn/smartphones/series-find-x/find-x9/",
		},
		{
			name: "Vivo X60",
			image: "/images/device/x60.webp",
			specs: "Titanium / 12GB + 256GB",
			description:
				"Professional photography, Zeiss optics, 5G connectivity.",
			link: "https://www.vivo.com.cn/vivo-x60",
	
	    },
		{
			name: "Huawei P30",
			image: "/images/device/p30.jpg",
			specs: "Titanium / 8GB + 128GB",
			description:
				"leading photography, Leica optics, 5G connectivity.",
			link: "https://www.huawei.com/en/products/phone/p30",
		}
	],
	Watch: [
		{
			name: "Galaxy Watch 6",
			image: "/images/device/watch6.jpg",
			specs: "purple / 40mm",
			description:
				"Professional smartwatch with advanced health monitoring and seamless integration with Samsung ecosystem.",
			link: "https://www.samsung.com/global/galaxy/galaxy-watch6/",
		},
		{
			name: "HUAWEI Band 8 NFC",
			image: "/images/device/band8.webp",
			specs: "BlackPink / 1.47-inch AMOLED",
			description:
				"Latest HUAWEI smartwatch with enhanced performance, health tracking, and customizable watch faces.",
			link: "https://www.huawei.com/en/products/wearables/huawei-band-8/",
		}
	],
	Buds:   [
		{
			name: "Galaxy Buds 2 Pro",
			image: "/images/device/buds2.webp",
			specs: "white",
			description:
				"Premium true wireless earbuds with immersive sound quality, active noise cancellation, and long battery life.",
			link: "https://www.samsung.com/global/galaxy/galaxy-buds2-pro/",
		},
		{
			name: "Redmi Buds 6",
			image: "/images/device/buds6.jpeg",
			specs: "white",
			description:
				"Latest Redmi true wireless earbuds with superior sound quality, active noise cancellation, and comfortable fit.",
			link: "https://www.mi.com/redmi-buds-6/",
		},
		{
			name: "OPPO Enco Air2 Pro",
			image: "/images/device/air2pro.webp",
			specs: "white",
			description:
				"Latest OPPO true wireless earbuds with superior sound quality, active noise cancellation, and comfortable fit.",
			link: "https://www.oppo.com/en/products/enco-air2-pro/",
		}
	],
	Computer: [
		{
			name: "MacBook Air 13 2019",
			image: "/images/device/macbookair.jpeg",
			specs: "black / i5-8210Y / 8GB RAM / 256GB SSD",
			description:
				"great performance, lightweight design, and long battery life for everyday computing needs.",
			link: "https://www.apple.com/macbook-air-13-2019/",
		},
		{
			name: "ThinkPad X1 Carbon 2016",
			image: "/images/device/thinkpad.webp",
			specs: "black / i5-6200U / 8GB RAM / 256GB SSD",
			description:
				"durable and reliable business laptop with excellent performance, long battery life, and a comfortable keyboard for productivity on the go.",
			link: "https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-x1-carbon/",
		}
	],
	Camera: [
		{
			name: "GoPro MISSION1",
			image: "/images/device/gopromission.jpg",
			specs: "black / 8K / 1inch sensor",
			description:
				"Professional action camera with high-resolution video recording, advanced stabilization, and rugged design for capturing extreme sports and outdoor adventures.",
			link: "https://gopro.com/zh/cameras/mission1",
		},
		{
			name: "SONY A6000",
			image: "/images/device/sonya6000.webp",
			specs: "black / 24MP / 4K video",
			description:
				"Compact mirrorless camera with high-resolution image quality, fast autofocus, and versatile shooting capabilities for photography enthusiasts and content creators.",
			link: "https://www.sony.com/electronics/cameras",
		},
		{
			name: "GoPro HERO7 Black",
			image: "/images/device/goprohero7.webp",
			specs: "Black/ 4K / 12MP",
			description:
				"Professional action camera with high-resolution video recording, advanced stabilization, and rugged design for capturing extreme sports and outdoor adventures.",
			link: "https://gopro.com/zh/cameras/hero7-black",
		},
		{
			name: "OLYMPUS FE-320",
			image: "/images/device/olympusfe320.webp",
			specs: "silver / 16MP / 720p video",
			description:
				"Compact digital camera with high-resolution image quality, versatile shooting capabilities, and user-friendly features for capturing everyday moments and travel photography.",
			link: "https://www.olympus.com/en/products/cameras/fe-320",
		},
	],
	Pad: [
		{
			name: "Honor Pad 8",
			image: "/images/device/honorpad8.webp",
			specs: "Gray / 12GB + 256GB",
			description:
				"High-performance tablet with stunning display, powerful processing, and versatile features for productivity, creativity, and entertainment.",
			link: "https://www.honor.com/global/pad-8/",
		},
		{
			name: "Apple iPad mini 4",
			image: "/images/device/ipadmini4.jpg",
			specs: "Rose Gold / 2GB + 32GB",
			description:
				"Compact and powerful tablet with stunning display, versatile features, and seamless integration with the Apple ecosystem for productivity, creativity, and entertainment.",
			link: "https://www.apple.com/ipad-mini-4/",
		}
	]
};