module.exports = {
	mainTiles: [
		{
			ruName: "Что подарить родителям?",
			path: "/2019/12/12/parents-gits?utm_source=main_tile&utm_medium=parents-gits",
			isUnique: false
		},
		{
			ruName: "Термосы, термокружки",
			path: "/thermosbottle?utm_source=main_tile&utm_medium=thermosbottle",
			isUnique: true
		},
		{
			ruName: "Новогодние ёлочки",
			path: "/tree?utm_source=main_tile&utm_medium=tree",
			isUnique: true
		},
		{
			ruName: "Выбираем подарки для детей!",
			path: "/2019/12/14/children-gifts?utm_source=main_tile&utm_medium=children-gifts",
			isUnique: false
		},
		{
			ruName: "Подарки для мужчин",
			path: "/2019/12/17/vybrat-podarok-na-novyj-god?utm_source=main_tile&utm_medium=men-gifts",
			isUnique: false
		},
		{
			ruName: "Подарки для женщин",
			path: "/2019/12/21/podarki-na-novyj-god-2?utm_source=main_tile&utm_medium=women-gifts",
			isUnique: false
		}
	],
	sections: {
		electronics: {
			id: 1,
			ruName: "Электроника",
			tiles: [
				{
					ruName: "Домашние колонки с WiFi",
					path: "/wspeaker?ws_type%5B0%5D=multiroom&ws_type%5Boperation%5D=union&utm_source=el_title&utm_medium=netpl_inetradio",
					isUnique: true
				},
				{
					ruName: "Умные часы и браслеты",
					path: "/smartwatch?utm_source=el_title&utm_medium=smartwatch",
					isUnique: true
				},
				{
					ruName: "Умный дом",
					path: "/smart_home?utm_source=el_title&utm_medium=smart_home",
					isUnique: true
				},
				{
					ruName: "Портативные приставки",
					path: "/console?console_type%5B0%5D=2&console_type%5B1%5D=universal&console_type%5Boperation%5D=union&utm_source=el_title&utm_medium=console",
					isUnique: true
				},
				{
					ruName: "Телевизоры с AirPlay",
					path: "/tv?airplay=1&utm_source=el_title&utm_medium=tv",
					isUnique: true
				}
			],
			categories: {
				mobilePhonesAndAccessories: {
					ruName: "Мобильные телефоны и аксессуары",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						mobilePhones: {
							ruName: "Мобильные телефоны",
							subcategoryPageRuHeading: "Мобильные телефоны",
							path: "/mobile",
							isUnique: false,
							position: 0
						},
						headphones: {
							ruName: "Наушники",
							subcategoryPageRuHeading: "Наушники и гарнитуры",
							path: "/headphones",
							isUnique: false,
							position: 0
						},
						smartWatch: {
							ruName: "Умные часы и фитнес-браслеты",
							subcategoryPageRuHeading: "Умные часы и браслеты",
							path: "/smartwatch",
							isUnique: false,
							position: 0
						},
						portableChargers: {
							ruName: "Портативные зарядные устройства",
							subcategoryPageRuHeading: "Портативные зарядные устройства",
							path: "/portablecharger",
							isUnique: false,
							position: 0
						},
						memoryCards: {
							ruName: "Карты памяти",
							subcategoryPageRuHeading: "Карты памяти",
							path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union",
							isUnique: false,
							position: 1
						},
						phoneCases: {
							ruName: "Чехлы для телефонов",
							subcategoryPageRuHeading: "Чехлы для телефонов",
							path: "/phonecase",
							isUnique: true,
							position: 0
						},
						phoneAccumulators: {
							ruName: "Аккумуляторы",
							subcategoryPageRuHeading: "Аккумуляторы для телефонов",
							path: "/phoneaccum",
							isUnique: true,
							position: 0
						},
						bluetoothHeadsets: {
							ruName: "Bluetooth-гарнитуры",
							subcategoryPageRuHeading: "Bluetooth-гарнитуры",
							path: "/bt",
							isUnique: true,
							position: 0
						},
						selfieSticks: {
							ruName: "Палки для селфи",
							subcategoryPageRuHeading: "Палки для селфи",
							path: "/selfiestick",
							isUnique: true,
							position: 0
						},
						cablesAndAdapters: {
							ruName: "Кабели, адаптеры",
							subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
							path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union",
							isUnique: false,
							position: 0
						},
						carHolders: {
							ruName: "Автомобильные держатели",
							subcategoryPageRuHeading: "Автомобильные держатели",
							path: "/carholder",
							isUnique: false,
							position: 0
						},
						carChargers: {
							ruName: "Зарядные устройства",
							subcategoryPageRuHeading: "Зарядные устройства",
							path: "/chargersmobile?mc_devicetype%5B0%5D=type&mc_devicetype%5Boperation%5D=union&mc_type%5B0%5D=network&mc_type%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						wirelessChargers: {
							ruName: "Беспроводные зарядные устройства",
							subcategoryPageRuHeading: "Зарядные устройства",
							path: "/chargersmobile?mc_type%5B0%5D=wireless&mc_type%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						speakerDocks: {
							ruName: "Док-станции для смартфонов",
							subcategoryPageRuHeading: "Док-станции для смартфонов",
							path: "/speakerdock",
							isUnique: false,
							position: 0
						}
					}
				},
				televisionAnDVideo: {
					ruName: "Телевидение и видео",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						tvSets: {
							ruName: "Телевизоры",
							subcategoryPageRuHeading: "Телевизоры",
							path: "/tv",
							isUnique: true,
							position: 0
						},
						terrestrials: {
							ruName: "Приемники цифрового ТВ",
							subcategoryPageRuHeading: "Приемники цифрового ТВ",
							path: "/terrestrial",
							isUnique: true,
							position: 0
						},
						satellites: {
							ruName: "Спутниковые ресиверы",
							subcategoryPageRuHeading: "Спутниковые ресиверы",
							path: "/satellite",
							isUnique: true,
							position: 0
						},
						aerials: {
							ruName: "ТВ-антенны",
							subcategoryPageRuHeading: "ТВ-антенны",
							path: "/aerial",
							isUnique: true,
							position: 0
						},
						projectors: {
							ruName: "Проекторы",
							subcategoryPageRuHeading: "Проекторы",
							path: "/projector",
							isUnique: true,
							position: 0
						},
						wallmounts: {
							ruName: "Кронштейны",
							subcategoryPageRuHeading: "Кронштейны",
							path: "/wallmount",
							isUnique: true,
							position: 0
						},
						mediaPlayers: {
							ruName: "Медиаплееры",
							subcategoryPageRuHeading: "Медиаплееры",
							path: "/media",
							isUnique: true,
							position: 0
						},
						dvdPlayers: {
							ruName: "Плееры DVD и Blu-ray",
							subcategoryPageRuHeading: "Плееры DVD и Blu-ray",
							path: "/dvd",
							isUnique: true,
							position: 0
						},
						microPCs: {
							ruName: "Микро-ПК (HDMI-стики)",
							subcategoryPageRuHeading: "Микро-ПК",
							path: "/desktoppc?desktoppc_type%5B0%5D=micro&desktoppc_type%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						soundBars: {
							ruName: "Саундбары и домашние кинотеатры",
							subcategoryPageRuHeading: "Саундбары и домашние кинотеатры",
							path: "/soundbar",
							isUnique: false,
							position: 0
						},
						tvAccessories: {
							ruName: "Аксессуары для ТВ",
							subcategoryPageRuHeading: "Аксессуары для ТВ",
							path: "/tvaccessory",
							isUnique: true,
							position: 0
						},
						smartTvKeyboards: {
							ruName: "Клавиатуры для Smart TV",
							subcategoryPageRuHeading: "Клавиатуры",
							path: "/keyboards?mk_designation%5B0%5D=smarttv&mk_designation%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						avCables: {
							ruName: "Кабели, адаптеры для AV-аппаратуры",
							subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
							path: "/cable?cable_usage%5B0%5D=av&cable_usage%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						remoteControls: {
							ruName: "Универсальные пульты ДУ",
							subcategoryPageRuHeading: "Универсальные пульты ДУ",
							path: "/remote",
							isUnique: false,
							position: 0
						},
						projectorScreens: {
							ruName: "Проекционные экраны",
							subcategoryPageRuHeading: "Проекционные экраны",
							path: "/projectorscreen",
							isUnique: true,
							position: 0
						}
					}
				},
				tabsAndEbooks: {
					ruName: "Планшеты, электронные книги",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						tablets: {
							ruName: "Планшеты",
							subcategoryPageRuHeading: "Планшеты",
							path: "/tabletpc",
							isUnique: false,
							position: 0
						},
						ebooks: {
							ruName: "Электронные книги",
							subcategoryPageRuHeading: "Электронные книги",
							path: "/ebook",
							isUnique: true,
							position: 0
						},
						tabletCases: {
							ruName: "Чехлы для планшетов",
							subcategoryPageRuHeading: "Чехлы для планшетов",
							path: "/tabletcase",
							isUnique: true,
							position: 0
						},
						portableChargers: {
							ruName: "Портативные зарядные устройства",
							subcategoryPageRuHeading: "Портативные зарядные устройства",
							path: "/portablecharger",
							isUnique: false,
							position: 1
						},
						memoryCards: {
							ruName: "Карты памяти",
							subcategoryPageRuHeading: "Карты памяти",
							path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union",
							isUnique: false,
							position: 0
						},
						cablesAndAdapters: {
							ruName: "Кабели, адаптеры",
							subcategoryPageRuHeading: "Кабели для телефонов и планшетов",
							path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union",
							isUnique: false,
							position: 1
						},
						chargers: {
							ruName: "Зарядные устройства",
							subcategoryPageRuHeading: "Зарядные устройства",
							path: "/chargersmobile?mc_devicetype%5B0%5D=type3&mc_devicetype%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						wireless4gAnd3gModems: {
							ruName: "4G и 3G-модемы",
							subcategoryPageRuHeading: "Беспроводные адаптеры",
							path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union",
							isUnique: false,
							position: 0
						},
						ebookCovers: {
							ruName: "Обложки для электронных книг",
							subcategoryPageRuHeading: "Обложки для электронных книг",
							path: "/ebookcover",
							isUnique: true,
							position: 0
						}
					}
				},
				audio: {
					ruName: "Аудиотехника",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						headphones: {
							ruName: "Наушники",
							subcategoryPageRuHeading: "Наушники и гарнитуры",
							path: "/headphones",
							isUnique: false,
							position: 1
						},
						multimediaAcoustics: {
							ruName: "Мультимедиа акустика",
							subcategoryPageRuHeading: "Мультимедиа акустика",
							path: "/sound",
							isUnique: false,
							position: 0
						},
						wirelessSpeakers: {
							ruName: "Беспроводные и портативные колонки",
							subcategoryPageRuHeading: "Беспроводные и портативные колонки",
							path: "/wspeaker",
							isUnique: true,
							position: 0
						},
						internetRadioStations: {
							ruName: "Интернет-радиостанции",
							subcategoryPageRuHeading: "Беспроводные и портативные колонки",
							path: "/wspeaker?netpl_inetradio=1",
							isUnique: true,
							position: 0
						},
						mp3players: {
							ruName: "MP3-плееры",
							subcategoryPageRuHeading: "MP3-плееры",
							path: "/player",
							isUnique: true,
							position: 0
						},
						hifiaudio: {
							ruName: "Музыкальные центры",
							subcategoryPageRuHeading: "Музыкальные центры",
							path: "/hifiaudio",
							isUnique: true,
							position: 0
						},
						microphones: {
							ruName: "Микрофоны",
							subcategoryPageRuHeading: "Микрофоны",
							path: "/microphones",
							isUnique: false,
							position: 0
						},
						hifisound: {
							ruName: "Акустика Hi-Fi и Hi-End",
							subcategoryPageRuHeading: "Hi-Fi акустика",
							path: "/hifisound",
							isUnique: true,
							position: 0
						},
						recievers: {
							ruName: "AV-ресиверы и усилители",
							subcategoryPageRuHeading: "AV-ресиверы и усилители",
							path: "/recievers",
							isUnique: true,
							position: 0
						},
						vinylRecordPlayers: {
							ruName: "Виниловые проигрыватели",
							subcategoryPageRuHeading: "Виниловые проигрыватели",
							path: "/turntable",
							isUnique: true,
							position: 0
						},
						phonoStages: {
							ruName: "Фонокорректоры",
							subcategoryPageRuHeading: "Фонокорректоры",
							path: "/phonopreamps",
							isUnique: true,
							position: 0
						},
						networkPlayers: {
							ruName: "Сетевые проигрыватели",
							subcategoryPageRuHeading: "Сетевые проигрыватели",
							path: "/network_player",
							isUnique: true,
							position: 0
						},
						radio: {
							ruName: "Радиоприемники",
							subcategoryPageRuHeading: "Радиоприемники",
							path: "/radio",
							isUnique: false,
							position: 0
						},
						portCarAudio: {
							ruName: "Магнитолы",
							subcategoryPageRuHeading: "Магнитолы",
							path: "/portaudio",
							isUnique: true,
							position: 0
						},
						soundBars: {
							ruName: "Саундбары и домашние кинотеатры",
							subcategoryPageRuHeading: "Саундбары и домашние кинотеатры",
							path: "/soundbar",
							isUnique: false,
							position: 1
						},
						clockRadios: {
							ruName: "Электронные и радиочасы",
							subcategoryPageRuHeading: "Электронные и радиочасы",
							path: "/clockradio",
							isUnique: true,
							position: 0
						},
						voiceRecorders: {
							ruName: "Диктофоны",
							subcategoryPageRuHeading: "Диктофоны",
							path: "/voicerecorder",
							isUnique: true,
							position: 0
						},
						cables: {
							ruName: "Кабели",
							subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
							path: "/cable",
							isUnique: true,
							position: 0
						},
						vinylRecordPlayersAccessories: {
							ruName: "Звукосниматели, тонармы, иглы",
							subcategoryPageRuHeading: "Звукосниматели, тонармы, иглы",
							path: "/turntableaccess",
							isUnique: true,
							position: 0
						},
						headphoneAmplifiers: {
							ruName: "Усилители для наушников",
							subcategoryPageRuHeading: "Усилители для наушников",
							path: "/portableamp",
							isUnique: true,
							position: 0
						},
						speakerDocks: {
							ruName: "Док-станции для смартфонов",
							subcategoryPageRuHeading: "Док-станции для смартфонов",
							path: "/speakerdock",
							isUnique: false,
							position: 1
						},
						remoteControls: {
							ruName: "Универсальные пульты ДУ",
							subcategoryPageRuHeading: "Универсальные пульты ДУ",
							path: "/remote",
							isUnique: false,
							position: 1
						}
					}
				},
				photoAndVideo: {
					ruName: "Фото- и видеотехника",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						cameras: {
							ruName: "Фотоаппараты",
							subcategoryPageRuHeading: "Фотоаппараты",
							path: "/photo",
							isUnique: true,
							position: 0
						},
						lenses: {
							ruName: "Объективы",
							subcategoryPageRuHeading: "Объективы",
							path: "/lens",
							isUnique: true,
							position: 0
						},
						actionCameras: {
							ruName: "Экшен-камеры",
							subcategoryPageRuHeading: "Экшен-камеры",
							path: "/actioncamera",
							isUnique: false,
							position: 0
						},
						actionCameraAccessories: {
							ruName: "Аксессуары и крепления для экшен-камер",
							subcategoryPageRuHeading: "Аксессуары и крепления для экшен-камер",
							path: "/actioncamera_acs",
							isUnique: false,
							position: 0
						},
						videocameras: {
							ruName: "Видеокамеры",
							subcategoryPageRuHeading: "Видеокамеры",
							path: "/video",
							isUnique: true,
							position: 0
						},
						photoPrinters: {
							ruName: "Фотопринтеры",
							subcategoryPageRuHeading: "Фотопринтеры",
							path: "/printers?type_print[0]=photoprinter&type_print[operation]=union",
							isUnique: true,
							position: 0
						},
						tripods: {
							ruName: "Штативы",
							subcategoryPageRuHeading: "Штативы",
							path: "/tripod",
							isUnique: true,
							position: 0
						},
						memoryCards: {
							ruName: "Карты памяти",
							subcategoryPageRuHeading: "Карты памяти",
							path: "/memcards",
							isUnique: false,
							position: 0
						},
						photoFrames: {
							ruName: "Цифровые фоторамки",
							subcategoryPageRuHeading: "Цифровые фоторамки",
							path: "/photoframe",
							isUnique: true,
							position: 0
						},
						flashes: {
							ruName: "Вспышки и лампы",
							subcategoryPageRuHeading: "Вспышки и лампы",
							path: "/flashes",
							isUnique: true,
							position: 0
						},
						batteriesAccumulatorsChargers: {
							ruName: "Батарейки, аккумуляторы, зарядные",
							subcategoryPageRuHeading: "Батарейки, аккумуляторы, зарядные",
							path: "/battery",
							isUnique: true,
							position: 0
						},
						cases: {
							ruName: "Сумки и рюкзаки для фото/видео",
							subcategoryPageRuHeading: "Сумки для фото/видеотехники",
							path: "/case",
							isUnique: true,
							position: 0
						},
						cardReaders: {
							ruName: "Карт-ридеры",
							subcategoryPageRuHeading: "Карт-ридеры",
							path: "/cardreaders",
							isUnique: false,
							position: 0
						},
						batteries: {
							ruName: "Аккумуляторы",
							subcategoryPageRuHeading: "Аккумуляторы, ЗУ для фото/видеотехники",
							path: "/batteries",
							isUnique: true,
							position: 0
						},
						photoFilters: {
							ruName: "Светофильтры и конвертеры",
							subcategoryPageRuHeading: "Светофильтры и конвертеры",
							path: "/photofilter",
							isUnique: true,
							position: 0
						}
					}
				},
				videoGames: {
					ruName: "Видеоигры",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						consoles: {
							ruName: "Игровые приставки",
							subcategoryPageRuHeading: "Игровые приставки",
							path: "/console",
							isUnique: true,
							position: 0
						},
						consoleGames: {
							ruName: "Игры для приставок",
							subcategoryPageRuHeading: "Игры для приставок",
							path: "/games",
							isUnique: false,
							position: 0
						},
						pcGames: {
							ruName: "Игры для ПК",
							subcategoryPageRuHeading: "Игры для ПК",
							path: "/pcgames",
							isUnique: false,
							position: 0
						},
						virtualReality: {
							ruName: "Очки виртуальной реальности",
							subcategoryPageRuHeading: "Очки виртуальной реальности",
							path: "/virtualreality",
							isUnique: false,
							position: 0
						},
						controllersAndAccessories: {
							ruName: "Игровые контроллеры и аксессуары",
							subcategoryPageRuHeading: "Игровые контроллеры и аксессуары",
							path: "/controllers",
							isUnique: false,
							position: 0
						},
						paymentCards: {
							ruName: "Карты оплаты и подписки",
							subcategoryPageRuHeading: "Карты оплаты и подписки",
							path: "/paymentcard",
							isUnique: false,
							position: 0
						}
					}
				},
				gadgets: {
					ruName: "Гаджеты",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						subcategory: {
							ruName: "Умные часы и фитнес-браслеты",
							subcategoryPageRuHeading: "Умные часы и браслеты",
							path: "/smartwatch",
							isUnique: false,
							position: 1
						},
						heartRateMonitorsAndPulseOximeters: {
							ruName: "Пульсометры, пульсоксиметры",
							subcategoryPageRuHeading: "Пульсометры, пульсоксиметры",
							path: "/heart_rate",
							isUnique: false,
							position: 0
						},
						strapsAndBracelets: {
							ruName: "Сменные ремешки и браслеты",
							subcategoryPageRuHeading: "Сменные ремешки и браслеты",
							path: "/replacementstrap",
							isUnique: true,
							position: 0
						},
						virtualReality: {
							ruName: "Очки виртуальной реальности",
							subcategoryPageRuHeading: "Очки виртуальной реальности",
							path: "/virtualreality",
							isUnique: false,
							position: 1
						},
						smartScales: {
							ruName: "Умные весы",
							subcategoryPageRuHeading: "Умные весы",
							path: "/scales?sc_synchronize=1",
							isUnique: true,
							position: 0
						},
						nitratomersDosimeters: {
							ruName: "Нитратомеры, дозиметры, экотестеры",
							subcategoryPageRuHeading: "Нитратомеры, дозиметры, экотестеры",
							path: "/nitrate",
							isUnique: false,
							position: 0
						},
						electronicSteamGenerators: {
							ruName: "Электронные парогенераторы",
							subcategoryPageRuHeading: "Электронные парогенераторы",
							path: "/smoke",
							isUnique: false,
							position: 0
						}
					}
				},
				smarthouseAndSurveillanceVideo: {
					ruName: "Умный дом и видеонаблюдение",
					isUnique: false,
					containsUnique: false,
					subCategories: {
						smartHome: {
							ruName: "Умный дом",
							subcategoryPageRuHeading: "Умный дом",
							path: "/smart_home",
							isUnique: false,
							position: 0
						},
						smartThermostats: {
							ruName: "Умные терморегуляторы",
							subcategoryPageRuHeading: "Терморегуляторы",
							path: "/thermostat?smarthome=1",
							isUnique: false,
							position: 0
						},
						smartLightBulbs: {
							ruName: "Умные лампочки",
							subcategoryPageRuHeading: "Лампочки",
							path: "/lightbulb?lib_smartlight=1",
							isUnique: false,
							position: 0
						},
						smartSockets: {
							ruName: "Умные розетки",
							subcategoryPageRuHeading: "Розетки, выключатели",
							path: "/wall_socket?wallsoc_smart=1",
							isUnique: false,
							position: 0
						},
						ipCameras: {
							ruName: "IP-камеры",
							subcategoryPageRuHeading: "IP-камеры",
							path: "/ipcamera",
							isUnique: false,
							position: 0
						},
						videoDoorPhones: {
							ruName: "Видеодомофоны",
							subcategoryPageRuHeading: "Видеодомофоны",
							path: "/videodoorphone",
							isUnique: false,
							position: 0
						},
						cctvCameras: {
							ruName: "Камеры CCTV",
							subcategoryPageRuHeading: "Камеры CCTV",
							path: "/cctvcamera",
							isUnique: false,
							position: 0
						},
						DVRs: {
							ruName: "Видеорегистраторы",
							subcategoryPageRuHeading: "Видеорегистраторы наблюдения",
							path: "/dvr",
							isUnique: false,
							position: 0
						},
						cameraTraps: {
							ruName: "Фотоловушки",
							subcategoryPageRuHeading: "Фотоловушки",
							path: "/camera_traps",
							isUnique: false,
							position: 0
						}
					}
				},
				electricTransport: {
					ruName: "Электрический транспорт",
					isUnique: true,
					containsUnique: false,
					subCategories: {
						electricScooters: {
							ruName: "Электросамокаты и электроскутеры",
							subcategoryPageRuHeading: "Электросамокаты и электроскутеры",
							path: "/electric_scooter",
							isUnique: false,
							position: 0
						},
						segways: {
							ruName: "Гироциклы",
							subcategoryPageRuHeading: "Гироциклы",
							path: "/segway",
							isUnique: false,
							position: 0
						},
						electrobikes: {
							ruName: "Электровелосипеды",
							subcategoryPageRuHeading: "Электровелосипеды",
							path: "/electrobike",
							isUnique: false,
							position: 0
						}
					}
				},
				telephonyAndCommunication: {
					ruName: "Телефония и связь",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						mobilePhones: {
							ruName: "Мобильные телефоны",
							subcategoryPageRuHeading: "Мобильные телефоны",
							path: "/mobile",
							isUnique: false,
							position: 1
						},
						dectPhones: {
							ruName: "Радиотелефоны DECT",
							subcategoryPageRuHeading: "Радиотелефоны DECT",
							path: "/dect",
							isUnique: true,
							position: 0
						},
						phones: {
							ruName: "Проводные телефоны",
							subcategoryPageRuHeading: "Проводные телефоны",
							path: "/phone",
							isUnique: true,
							position: 0
						},
						wireless3gModems: {
							ruName: "3G-модемы",
							subcategoryPageRuHeading: "Беспроводные адаптеры",
							path: "/wirelessadapter?wa_type%5B0%5D=3g&wa_type%5B1%5D=4g&wa_type%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						faxes: {
							ruName: "Факсы",
							subcategoryPageRuHeading: "Факсы",
							path: "/fax",
							isUnique: false,
							position: 0
						},

						portableRadioStations: {
							ruName: "Портативные радиостанции",
							subcategoryPageRuHeading: "Портативные радиостанции",
							path: "/portableradio",
							isUnique: false,
							position: 0
						}
					}
				},
				musicEquipment: {
					ruName: "Музыкальное оборудование",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						synthesizersAndWorkstations: {
							ruName: "Синтезаторы и рабочие станции",
							subcategoryPageRuHeading: "Синтезаторы и рабочие станции",
							path: "/synthandworkst",
							isUnique: true,
							position: 0
						},
						audioInterfaces: {
							ruName: "Аудиоинтерфейсы",
							subcategoryPageRuHeading: "Аудиоинтерфейсы",
							path: "/audiointerface",
							isUnique: false,
							position: 0
						},
						concertAcoustics: {
							ruName: "Концертная акустика",
							subcategoryPageRuHeading: "Концертная акустика",
							path: "/concertacoustics",
							isUnique: true,
							position: 0
						},
						studioMonitors: {
							ruName: "Студийные мониторы",
							subcategoryPageRuHeading: "Студийные мониторы",
							path: "/studio_monitor",
							isUnique: true,
							position: 0
						},
						guitarAmps: {
							ruName: "Гитарные комбоусилители",
							subcategoryPageRuHeading: "Гитарные комбоусилители",
							path: "/guitarcombo",
							isUnique: true,
							position: 0
						},
						microphones: {
							ruName: "Микрофоны",
							subcategoryPageRuHeading: "Микрофоны",
							path: "/microphones",
							isUnique: false,
							position: 1
						}
					}
				},
				opticalAppliances: {
					ruName: "Оптические приборы",
					isUnique: true,
					containsUnique: false,
					subCategories: {
						binoculars: {
							ruName: "Бинокли и подзорные трубы",
							subcategoryPageRuHeading: "Бинокли и подзорные трубы",
							path: "/optic",
							isUnique: false,
							position: 0
						},
						telescopes: {
							ruName: "Телескопы",
							subcategoryPageRuHeading: "Телескопы",
							path: "/telescope",
							isUnique: false,
							position: 0
						}
					}
				}
			}
		},
		computers: {
			id: 2,
			ruName: "Компьютеры и сети",
			tiles: [
				{
					ruName: "Планшеты",
					path: "/tabletpc?utm_source=pc_tile&utm_medium=tabletpc",
					isUnique: true
				},
				{
					ruName: "Беспроводные точки доступа",
					path: "/wirelessap?utm_source=pc_tile&utm_medium=wirelessap",
					isUnique: true
				},
				{
					ruName: "Компактные и недорогие ноутбуки",
					path: "/notebook?price%5Bto%5D=1200.00&diagonalnb%5Bfrom%5D=120&diagonalnb%5Bto%5D=141&utm_source=pc_tile&utm_medium=notebook",
					isUnique: true
				},
				{
					ruName: "SSD с поддержкой NVMe",
					path: "/ssd?utm_source=pc_tile&utm_medium=ssd",
					isUnique: true
				},
				{
					ruName: "Мониторы с повышенной частотой обновления кадров",
					path: "/display?disp_refreshrate%5Bfrom%5D=120hz&utm_source=pc_tile&utm_medium=display",
					isUnique: true
				}
			],
			categories: {
				laptopsComputersMonitors: {
					ruName: "Ноутбуки, компьютеры, мониторы",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						onePieceComputers: {
							ruName: "Ноутбуки",
							subcategoryPageRuHeading: "Ноутбуки",
							path: "/notebook",
							isUnique: true,
							position: 0
						},
						tablets: {
							ruName: "Планшетные компьютеры",
							subcategoryPageRuHeading: "Планшеты",
							path: "/tabletpc",
							isUnique: false,
							position: 1
						},
						monoblockPcs: {
							ruName: "Моноблоки",
							subcategoryPageRuHeading: "Моноблоки",
							path: "/monoblock",
							isUnique: true,
							position: 0
						},
						desktopPcs: {
							ruName: "Компьютеры",
							subcategoryPageRuHeading: "Компьютеры",
							path: "/desktoppc",
							isUnique: true,
							position: 0
						},
						monitors: {
							ruName: "Мониторы",
							subcategoryPageRuHeading: "Мониторы",
							path: "/display",
							isUnique: true,
							position: 0
						}
					}
				},
				components: {
					ruName: "Комплектующие",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						videoCards: {
							ruName: "Видеокарты",
							subcategoryPageRuHeading: "Видеокарты",
							path: "/videocard",
							isUnique: true,
							position: 0
						},
						CPU: {
							ruName: "Процессоры",
							subcategoryPageRuHeading: "Процессоры",
							path: "/cpu",
							isUnique: true,
							position: 0
						},
						motherboards: {
							ruName: "Материнские платы",
							subcategoryPageRuHeading: "Материнские платы",
							path: "/motherboard",
							isUnique: true,
							position: 0
						},
						RAM: {
							ruName: "Оперативная память",
							subcategoryPageRuHeading: "Оперативная память",
							path: "/dram",
							isUnique: true,
							position: 0
						},
						fans: {
							ruName: "Кулеры",
							subcategoryPageRuHeading: "Системы охлаждения",
							path: "/fan",
							isUnique: true,
							position: 0
						},
						SSD: {
							ruName: "SSD",
							subcategoryPageRuHeading: "SSD",
							path: "/ssd",
							isUnique: false,
							position: 0
						},
						HDD: {
							ruName: "Жесткие диски",
							subcategoryPageRuHeading: "Жесткие диски",
							path: "/hdd",
							isUnique: true,
							position: 0
						},
						computerCases: {
							ruName: "Корпуса",
							subcategoryPageRuHeading: "Корпуса",
							path: "/chassis",
							isUnique: true,
							position: 0
						},
						powerSupplies: {
							ruName: "Блоки питания",
							subcategoryPageRuHeading: "Блоки питания",
							path: "/powersupply",
							isUnique: true,
							position: 0
						},
						soundCards: {
							ruName: "Звуковые карты",
							subcategoryPageRuHeading: "Звуковые карты",
							path: "/soundcard?type_soundcard%5B0%5D=internal&type_soundcard%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						networkAdapters: {
							ruName: "Сетевые адаптеры",
							subcategoryPageRuHeading: "Сетевые адаптеры",
							path: "/networkadapter",
							isUnique: false,
							position: 0
						},
						opticalDrives: {
							ruName: "Оптические приводы",
							subcategoryPageRuHeading: "Оптические приводы",
							path: "/optical",
							isUnique: false,
							position: 0
						},
						tvTuners: {
							ruName: "ТВ-тюнеры",
							subcategoryPageRuHeading: "ТВ-тюнеры",
							path: "/tvtuner?execution_tvtune%5B0%5D=in&execution_tvtune%5Boperation%5D=union",
							isUnique: true,
							position: 0
						}
					}
				},
				forPrintingAndDesign: {
					ruName: "Техника для печати и дизайна",
					isUnique: false,
					containsUnique: true,
					subCategories: {
						printers: {
							ruName: "Принтеры и МФУ",
							subcategoryPageRuHeading: "Принтеры и МФУ",
							path: "/printers",
							isUnique: false,
							position: 0
						},
						scanners: {
							ruName: "Сканеры",
							subcategoryPageRuHeading: "Сканеры",
							path: "/scanner",
							isUnique: false,
							position: 0
						},
						accessoriesForOfficeEquipment: {
							ruName: "Аксессуары для оргтехники",
							subcategoryPageRuHeading: "Аксессуары для оргтехники",
							path: "/officeequip_acs",
							isUnique: true,
							position: 0
						},
						graphicTablets: {
							ruName: "Графические планшеты",
							subcategoryPageRuHeading: "Графические планшеты",
							path: "/tablets",
							isUnique: false,
							position: 0
						},
						cartridges: {
							ruName: "Картриджи",
							subcategoryPageRuHeading: "Картриджи для принтеров и МФУ",
							path: "/cartridges",
							isUnique: false,
							position: 0
						},
						photoPaper: {
							ruName: "Бумага и материалы для печати",
							subcategoryPageRuHeading: "Бумага и материалы для печати",
							path: "/photopaper",
							isUnique: false,
							position: 0
						},
						laminators: {
							ruName: "Ламинаторы",
							subcategoryPageRuHeading: "Ламинаторы",
							path: "/laminator",
							isUnique: false,
							position: 0
						},
						bookletMakers: {
							ruName: "Брошюровщики",
							subcategoryPageRuHeading: "Брошюровщики",
							path: "/bindingmachines",
							isUnique: false,
							position: 0
						},
						matrixPrinters: {
							ruName: "Матричные принтеры",
							subcategoryPageRuHeading: "Матричные принтеры",
							path: "/matrixprinter",
							isUnique: false,
							position: 0
						},
						printers3d: {
							ruName: "3D-принтеры",
							subcategoryPageRuHeading: "3D-принтеры",
							path: "/3dprinter",
							isUnique: false,
							position: 0
						},
						pens3d: {
							ruName: "3D-ручки",
							subcategoryPageRuHeading: "3D-ручки",
							path: "/3d_pen",
							isUnique: false,
							position: 0
						},
						suppliesFor3dPrinting: {
							ruName: "Расходные материалы для 3D-печати",
							subcategoryPageRuHeading: "Расходные материалы для 3D-печати",
							path: "/3d_filament",
							isUnique: false,
							position: 0
						}
					}
				},
				devicesForInputting: {
					ruName: "Манипуляторы и устройства ввода",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						mouses: {
							ruName: "Мыши",
							subcategoryPageRuHeading: "Мыши",
							path: "/mouse",
							isUnique: true,
							position: 0
						},
						keyboards: {
							ruName: "Клавиатуры",
							subcategoryPageRuHeading: "Клавиатуры",
							path: "/keyboards",
							isUnique: true,
							position: 0
						},
						controllers: {
							ruName: "Игровые контроллеры и аксессуары",
							subcategoryPageRuHeading: "Игровые контроллеры и аксессуары",
							path: "/controllers",
							isUnique: false,
							position: 1
						},
						graphicTablets: {
							ruName: "Графические планшеты",
							subcategoryPageRuHeading: "Графические планшеты",
							path: "/tablets",
							isUnique: false,
							position: 1
						},
						peripheralKits: {
							ruName: "Наборы периферии (клавиатура + мышь)",
							subcategoryPageRuHeading: "Наборы периферии",
							path: "/peripheralkits",
							isUnique: true,
							position: 0
						},
						mousePads: {
							ruName: "Коврики для мыши",
							subcategoryPageRuHeading: "Коврики для мыши",
							path: "/mousepad",
							isUnique: false,
							position: 0
						}
					}
				},
				dataStorage: {
					ruName: "Хранение данных",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						SSD: {
							ruName: "SSD",
							subcategoryPageRuHeading: "SSD",
							path: "/ssd",
							isUnique: false,
							position: 1
						},
						HDD: {
							ruName: "Жесткие диски",
							subcategoryPageRuHeading: "HDD",
							path: "/hdd",
							isUnique: true,
							position: 0
						},
						externalHdd: {
							ruName: "Внешние накопители (HDD и SSD)",
							subcategoryPageRuHeading: "Внешние накопители",
							path: "/externalhdd",
							isUnique: true,
							position: 0
						},
						usbFlash: {
							ruName: "Флешки USB",
							subcategoryPageRuHeading: "USB Flash",
							path: "/usbflash",
							isUnique: true,
							position: 0
						},
						memoryCards: {
							ruName: "Карты памяти",
							subcategoryPageRuHeading: "Карты памяти",
							path: "/memcards",
							isUnique: false,
							position: 1
						},
						casesForHdd: {
							ruName: "Боксы для накопителей",
							subcategoryPageRuHeading: "Боксы для накопителей",
							path: "/hddbox",
							isUnique: true,
							position: 0
						},
						NAS: {
							ruName: "Сетевые накопители (NAS)",
							subcategoryPageRuHeading: "Сетевые накопители (NAS)",
							path: "/nas",
							isUnique: false,
							position: 0
						},
						opticalDrives: {
							ruName: "Оптические приводы",
							subcategoryPageRuHeading: "Оптические приводы",
							path: "/optical",
							isUnique: false,
							position: 1
						},
						usbHubs: {
							ruName: "USB-хабы и док-станции",
							subcategoryPageRuHeading: "USB-хабы и док-станции",
							path: "/usbhub",
							isUnique: true,
							position: 0
						},
						cardReaders: {
							ruName: "Карт-ридеры",
							subcategoryPageRuHeading: "Карт-ридеры",
							path: "/cardreaders",
							isUnique: false,
							position: 1
						}
					}
				},
				multimediaComponents: {
					ruName: "Мультимедиа периферия",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						pcAcoustics: {
							ruName: "Компьютерная акустика",
							subcategoryPageRuHeading: "Мультимедиа акустика",
							path: "/sound",
							isUnique: false,
							position: 1
						},
						headphones: {
							ruName: "Наушники",
							subcategoryPageRuHeading: "Наушники и гарнитуры",
							path: "/headphones",
							isUnique: false,
							position: 2
						},
						webCameras: {
							ruName: "Веб-камеры",
							subcategoryPageRuHeading: "Web-камеры",
							path: "/webcams",
							isUnique: true,
							position: 0
						},
						ipCameras: {
							ruName: "IP-камеры",
							subcategoryPageRuHeading: "IP-камеры",
							path: "/ipcamera",
							isUnique: false,
							position: 1
						},
						audioInterfaces: {
							ruName: "Аудиоинтерфейсы",
							subcategoryPageRuHeading: "Аудиоинтерфейсы",
							path: "/audiointerface",
							isUnique: false,
							position: 1
						}
					}
				},
				networkHardware: {
					ruName: "Сетевое оборудование",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						wirelessRouters: {
							ruName: "Беспроводные маршрутизаторы",
							subcategoryPageRuHeading: "Беспроводные маршрутизаторы",
							path: "/wrouter",
							isUnique: true,
							position: 0
						},
						wirelessAdapters: {
							ruName: "Беспроводные адаптеры",
							subcategoryPageRuHeading: "Беспроводные адаптеры",
							path: "/wirelessadapter",
							isUnique: true,
							position: 0
						},
						switches: {
							ruName: "Коммутаторы",
							subcategoryPageRuHeading: "Коммутаторы",
							path: "/switch",
							isUnique: true,
							position: 0
						},
						dslModemsAndRouters: {
							ruName: "DSL-модемы и маршрутизаторы",
							subcategoryPageRuHeading: "DSL-модемы и маршрутизаторы",
							path: "/dslmodem",
							isUnique: true,
							position: 0
						},
						ipCameras: {
							ruName: "IP-камеры",
							subcategoryPageRuHeading: "IP-камеры",
							path: "/ipcamera",
							isUnique: false,
							position: 2
						},
						NAS: {
							ruName: "NAS",
							subcategoryPageRuHeading: "Сетевые накопители (NAS)",
							path: "/nas",
							isUnique: false,
							position: 1
						},
						wirelessAccessPoints: {
							ruName: "Беспроводные точки доступа",
							subcategoryPageRuHeading: "Беспроводные точки доступа",
							path: "/wirelessap",
							isUnique: true,
							position: 0
						},
						modemsFor3gAnd4G: {
							ruName: "4G и 3G-модемы",
							subcategoryPageRuHeading: "Беспроводные адаптеры",
							path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union",
							isUnique: false,
							position: 1
						},
						networkCables: {
							ruName: "Сетевые кабели",
							subcategoryPageRuHeading: "Кабели для сетевого оборудования",
							path: "/cable?cable_usage%5B0%5D=type4&cable_usage%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						cableCrimpingTools: {
							ruName: "Инструмент для обжимки кабелей",
							subcategoryPageRuHeading: "Клещи обжимные",
							path: "/household_tools?ht_type%5B0%5D=crimpingpliers&ht_type%5Boperation%5D=union&order=date:desc",
							isUnique: true,
							position: 0
						},
						networkAdapters: {
							ruName: "Сетевые адаптеры",
							subcategoryPageRuHeading: "Сетевые адаптеры",
							path: "/networkadapter",
							isUnique: false,
							position: 1
						},
						powerlines: {
							ruName: "Сети по электропроводке (Powerline)",
							subcategoryPageRuHeading: "Сети по электропроводке (Powerline)",
							path: "/powerline",
							isUnique: true,
							position: 0
						},
						wirelessAntennas: {
							ruName: "Антенны беспроводной связи",
							subcategoryPageRuHeading: "Антенны беспроводной связи",
							path: "/wantenna",
							isUnique: true,
							position: 0
						}
					}
				},
				laptopAccessories: {
					ruName: "Аксессуары к ноутбукам и компьютерам",
					isUnique: false,
					containsUnique: true,
					subCategories: {
						mobilePhones: {
							laptopBackpacks: "Рюкзаки для ноутбуков",
							subcategoryPageRuHeading: "Рюкзаки",
							path: "/backpack?bap_internaldep%5B0%5D=laptoptablet&bap_internaldep%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						laptopBags: {
							ruName: "Сумки для ноутбуков",
							subcategoryPageRuHeading: "Сумки для ноутбуков",
							path: "/notebookcase",
							isUnique: true,
							position: 0
						},
						coolingCoasters: {
							ruName: "Охлаждающие подставки",
							subcategoryPageRuHeading: "Подставки для ноутбуков",
							path: "/laptopstand",
							isUnique: true,
							position: 0
						},
						cablesAdaptersSplitters: {
							ruName: "Кабели, адаптеры, разветвители",
							subcategoryPageRuHeading: "Кабели, адаптеры для компьютера",
							path: "/cable?cable_usage%5B0%5D=pc&cable_usage%5Boperation%5D=union",
							isUnique: true,
							position: 0
						},
						mousepads: {
							ruName: "Коврики для мыши",
							subcategoryPageRuHeading: "Коврики для мыши",
							path: "/mousepad",
							isUnique: false,
							position: 1
						},
						accumulatorsAndChargers: {
							ruName: "Аккумуляторы и зарядные устройства",
							subcategoryPageRuHeading: "Аккумуляторы, ЗУ для ноутбуков",
							path: "/nbbatteries?mfr%5B0%5D=for_notebook&mfr%5B1%5D=for_notebook_cha",
							isUnique: true,
							position: 0
						},
						universalChargers: {
							ruName: "Универсальные зарядные устройства",
							subcategoryPageRuHeading: "Зарядные устройства для ноутбуков",
							path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union",
							isUnique: false,
							position: 0
						}
					}
				},
				chargers: {
					ruName: "Электропитание",
					isUnique: true,
					containsUnique: true,
					subCategories: {
						ups: {
							ruName: "Источники бесперебойного питания",
							subcategoryPageRuHeading: "Источники бесперебойного питания",
							path: "/ups",
							isUnique: true,
							position: 0
						},
						stabilizersAndSurgeProtectors: {
							ruName: "Стабилизаторы и сетевые фильтры",
							subcategoryPageRuHeading: "Стабилизаторы и сетевые фильтры",
							path: "/voltageregulator",
							isUnique: true,
							position: 0
						},
						laptopBatteries: {
							ruName: "Аккумуляторы для ноутбуков",
							subcategoryPageRuHeading: "Аккумуляторы, ЗУ для ноутбуков",
							path: "/nbbatteries?mfr%5B0%5D=for_notebook",
							isUnique: true,
							position: 0
						},
						chargers: {
							ruName: "Зарядные устройства",
							subcategoryPageRuHeading: "Зарядные устройства для ноутбуков",
							path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union",
							isUnique: false,
							position: 1
						},
						cables: {
							ruName: "Кабели питания",
							subcategoryPageRuHeading: "Кабели, адаптеры IEC 60320",
							path: "/cable?conn1%5B0%5D=c5&conn1%5Boperation%5D=intersect",
							isUnique: true,
							position: 0
						},
						upsBatteries: {
							ruName: "Аккумуляторы для ИБП",
							subcategoryPageRuHeading: "Аккумуляторы для ИБП",
							path: "/ups_battery",
							isUnique: true,
							position: 0
						}
					}
				},
				software: {
					ruName: "Игры и программное обеспечение",
					isUnique: false,
					containsUnique: true,
					subCategories: {
						gamesForPc: {
							ruName: "Видеоигры для ПК",
							subcategoryPageRuHeading: "Игры для ПК",
							path: "/pcgames",
							isUnique: false,
							position: 1
						},
						gamesForConsole: {
							ruName: "Видеоигры для консолей",
							subcategoryPageRuHeading: "Игры для приставок",
							path: "/games",
							isUnique: false,
							position: 1
						},
						antiviruses: {
							ruName: "Антивирусы и безопасность",
							subcategoryPageRuHeading: "Антивирусы и безопасность",
							path: "/antivirus",
							isUnique: true,
							position: 0
						},
						paymentCardsAndSubscriptions: {
							ruName: "Карты оплаты и подписки",
							subcategoryPageRuHeading: "Карты оплаты и подписки",
							path: "/paymentcard",
							isUnique: false,
							position: 1
						}
					}
				}
			}
		}
	}
}
