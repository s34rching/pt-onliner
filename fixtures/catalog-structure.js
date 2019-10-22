module.exports = {
	electronics: {
		id: 1,
		ruName: "Электроника",
		categories: {
			mobilePhonesAndAccessories: {
				ruName: "Мобильные телефоны и аксессуары",
				subCategories: {
					mobilePhones: {
						ruName: "Мобильные телефоны",
						subcategoryPageRuHeading: "Мобильные телефоны",
						path: "/mobile"
					},
					headphones: {
						ruName: "Наушники",
						subcategoryPageRuHeading: "Наушники и гарнитуры",
						path: "/headphones"
					},
					smartWatch: {
						ruName: "Умные часы и фитнес-браслеты",
						subcategoryPageRuHeading: "Умные часы и браслеты",
						path: "/smartwatch"
					},
					portableChargers: {
						ruName: "Портативные зарядные устройства",
						subcategoryPageRuHeading: "Портативные зарядные устройства",
						path: "/portablecharger"
					},
					memoryCards: {
						ruName: "Карты памяти",
						subcategoryPageRuHeading: "Карты памяти",
						path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union"
					},
					phoneCases: {
						ruName: "Чехлы для телефонов",
						subcategoryPageRuHeading: "Чехлы для телефонов",
						path: "/phonecase"
					},
					phoneAccumulators: {
						ruName: "Аккумуляторы",
						subcategoryPageRuHeading: "Аккумуляторы для телефонов",
						path: "/phoneaccum"
					},
					bluetoothHeadsets: {
						ruName: "Bluetooth-гарнитуры",
						subcategoryPageRuHeading: "Bluetooth-гарнитуры",
						path: "/bt"
					},
					selfieSticks: {
						ruName: "Палки для селфи",
						subcategoryPageRuHeading: "Палки для селфи",
						path: "/selfiestick"
					},
					cablesAndAdapters: {
						ruName: "Кабели, адаптеры",
						subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
						path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union"
					},
					carHolders: {
						ruName: "Автомобильные держатели",
						subcategoryPageRuHeading: "Автомобильные держатели",
						path: "/carholder"
					},
					carChargers: {
						ruName: "Зарядные устройства",
						subcategoryPageRuHeading: "Зарядные устройства",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type&mc_devicetype%5Boperation%5D=union&mc_type%5B0%5D=network&mc_type%5Boperation%5D=union"
					},
					wirelessChargers: {
						ruName: "Беспроводные зарядные устройства",
						subcategoryPageRuHeading: "Зарядные устройства",
						path: "/chargersmobile?mc_type%5B0%5D=wireless&mc_type%5Boperation%5D=union"
					},
					speakerDocks: {
						ruName: "Док-станции для смартфонов",
						subcategoryPageRuHeading: "Док-станции для смартфонов",
						path: "/speakerdock"
					}
				}
			},
			televisionAnDVideo: {
				ruName: "Телевидение и видео",
				subCategories: {
					tvSets: {
						ruName: "Телевизоры",
						subcategoryPageRuHeading: "Телевизоры",
						path: "/tv"
					},
					terrestrials: {
						ruName: "Приемники цифрового ТВ",
						subcategoryPageRuHeading: "Приемники цифрового ТВ",
						path: "/terrestrial"
					},
					satellites: {
						ruName: "Спутниковые ресиверы",
						subcategoryPageRuHeading: "Спутниковые ресиверы",
						path: "/satellite"
					},
					aerials: {
						ruName: "ТВ-антенны",
						subcategoryPageRuHeading: "ТВ-антенны",
						path: "/aerial"
					},
					projectors: {
						ruName: "Проекторы",
						subcategoryPageRuHeading: "Проекторы",
						path: "/projector"
					},
					wallmounts: {
						ruName: "Кронштейны",
						subcategoryPageRuHeading: "Кронштейны",
						path: "/wallmount"
					},
					mediaPlayers: {
						ruName: "Медиаплееры",
						subcategoryPageRuHeading: "Медиаплееры",
						path: "/media"
					},
					dvdPlayers: {
						ruName: "Плееры DVD и Blu-ray",
						subcategoryPageRuHeading: "Плееры DVD и Blu-ray",
						path: "/dvd"
					},
					microPCs: {
						ruName: "Микро-ПК (HDMI-стики)",
						subcategoryPageRuHeading: "Микро-ПК",
						path: "/desktoppc?desktoppc_type%5B0%5D=micro&desktoppc_type%5Boperation%5D=union"
					},
					soundBars: {
						ruName: "Саундбары и домашние кинотеатры",
						subcategoryPageRuHeading: "Саундбары и домашние кинотеатры",
						path: "/soundbar"
					},
					tvAccessories: {
						ruName: "Аксессуары для ТВ",
						subcategoryPageRuHeading: "Аксессуары для ТВ",
						path: "/tvaccessory"
					},
					smartTvKeyboards: {
						ruName: "Клавиатуры для Smart TV",
						subcategoryPageRuHeading: "Клавиатуры",
						path: "/keyboards?mk_designation%5B0%5D=smarttv&mk_designation%5Boperation%5D=union"
					},
					avCables: {
						ruName: "Кабели, адаптеры для AV-аппаратуры",
						subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
						path: "/cable?cable_usage%5B0%5D=av&cable_usage%5Boperation%5D=union"
					},
					remoteControls: {
						ruName: "Универсальные пульты ДУ",
						subcategoryPageRuHeading: "Универсальные пульты ДУ",
						path: "/remote"
					},
					projectorScreens: {
						ruName: "Проекционные экраны",
						subcategoryPageRuHeading: "Проекционные экраны",
						path: "/projectorscreen"
					}
				}
			},
			tabsAndEbooks: {
				ruName: "Планшеты, электронные книги",
				subCategories: {
					tablets: {
						ruName: "Планшеты",
						subcategoryPageRuHeading: "Планшеты",
						path: "/tabletpc"
					},
					ebooks: {
						ruName: "Электронные книги",
						subcategoryPageRuHeading: "Электронные книги",
						path: "/ebook"
					},
					tabletCases: {
						ruName: "Чехлы для планшетов",
						subcategoryPageRuHeading: "Чехлы для планшетов",
						path: "/tabletcase"
					},
					portableChargers: {
						ruName: "Портативные зарядные устройства",
						subcategoryPageRuHeading: "Портативные зарядные устройства",
						path: "/portablecharger"
					},
					memoryCards: {
						ruName: "Карты памяти",
						subcategoryPageRuHeading: "Карты памяти",
						path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union"
					},
					cablesAndAdapters: {
						ruName: "Кабели, адаптеры",
						subcategoryPageRuHeading: "Кабели для телефонов и планшетов",
						path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union"
					},
					chargers: {
						ruName: "Зарядные устройства",
						subcategoryPageRuHeading: "Зарядные устройства",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type3&mc_devicetype%5Boperation%5D=union"
					},
					wireless4gAnd3gModems: {
						ruName: "4G и 3G-модемы",
						subcategoryPageRuHeading: "Беспроводные адаптеры",
						path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union"
					},
					ebookCovers: {
						ruName: "Обложки для электронных книг",
						subcategoryPageRuHeading: "Обложки для электронных книг",
						path: "/ebookcover"
					}
				}
			},
			audio: {
				ruName: "Аудиотехника",
				subCategories: {
					headphones: {
						ruName: "Наушники",
						subcategoryPageRuHeading: "Наушники и гарнитуры",
						path: "/headphones"
					},
					multimediaAcoustics: {
						ruName: "Мультимедиа акустика",
						subcategoryPageRuHeading: "Мультимедиа акустика",
						path: "/sound"
					},
					wirelessSpeakers: {
						ruName: "Беспроводные и портативные колонки",
						subcategoryPageRuHeading: "Беспроводные и портативные колонки",
						path: "/wspeaker"
					},
					internetRadioStations: {
						ruName: "Интернет-радиостанции",
						subcategoryPageRuHeading: "Беспроводные и портативные колонки",
						path: "/wspeaker?netpl_inetradio=1"
					},
					mp3players: {
						ruName: "MP3-плееры",
						subcategoryPageRuHeading: "MP3-плееры",
						path: "/player"
					},
					hifiaudio: {
						ruName: "Музыкальные центры",
						subcategoryPageRuHeading: "Музыкальные центры",
						path: "/hifiaudio"
					},
					microphones: {
						ruName: "Микрофоны",
						subcategoryPageRuHeading: "Микрофоны",
						path: "/microphones"
					},
					hifisound: {
						ruName: "Акустика Hi-Fi и Hi-End",
						subcategoryPageRuHeading: "Hi-Fi акустика",
						path: "/hifisound"
					},
					recievers: {
						ruName: "AV-ресиверы и усилители",
						subcategoryPageRuHeading: "AV-ресиверы и усилители",
						path: "/recievers"
					},
					vinylRecordPlayers: {
						ruName: "Виниловые проигрыватели",
						subcategoryPageRuHeading: "Виниловые проигрыватели",
						path: "/turntable"
					},
					phonoStages: {
						ruName: "Фонокорректоры",
						subcategoryPageRuHeading: "Фонокорректоры",
						path: "/phonopreamps"
					},
					networkPlayers: {
						ruName: "Сетевые проигрыватели",
						subcategoryPageRuHeading: "Сетевые проигрыватели",
						path: "/network_player"
					},
					radio: {
						ruName: "Радиоприемники",
						subcategoryPageRuHeading: "Радиоприемники",
						path: "/radio"
					},
					portCarAudio: {
						ruName: "Магнитолы",
						subcategoryPageRuHeading: "Магнитолы",
						path: "/portaudio"
					},
					soundBars: {
						ruName: "Саундбары и домашние кинотеатры",
						subcategoryPageRuHeading: "Саундбары и домашние кинотеатры",
						path: "/soundbar"
					},
					clockRadios: {
						ruName: "Электронные и радиочасы",
						subcategoryPageRuHeading: "Электронные и радиочасы",
						path: "/clockradio"
					},
					voiceRecorders: {
						ruName: "Диктофоны",
						subcategoryPageRuHeading: "Диктофоны",
						path: "/voicerecorder"
					},
					cables: {
						ruName: "Кабели",
						subcategoryPageRuHeading: "Кабели, адаптеры, разветвители",
						path: "/cable"
					},
					vinylRecordPlayersAccessories: {
						ruName: "Звукосниматели, тонармы, иглы",
						subcategoryPageRuHeading: "Звукосниматели, тонармы, иглы",
						path: "/turntableaccess"
					},
					headphoneAmplifiers: {
						ruName: "Усилители для наушников",
						subcategoryPageRuHeading: "Усилители для наушников",
						path: "/portableamp"
					},
					speakerDocks: {
						ruName: "Док-станции для смартфонов",
						subcategoryPageRuHeading: "Док-станции для смартфонов",
						path: "/speakerdock"
					},
					remoteControls: {
						ruName: "Универсальные пульты ДУ",
						subcategoryPageRuHeading: "Универсальные пульты ДУ",
						path: "/remote"
					}
				}
			},
			photoAndVideo: {
				ruName: "Фото- и видеотехника",
				subCategories: {
					cameras: {
						ruName: "Фотоаппараты",
						subcategoryPageRuHeading: "Фотоаппараты",
						path: "/photo"
					},
					lenses: {
						ruName: "Объективы",
						subcategoryPageRuHeading: "Объективы",
						path: "/lens"
					},
					actionCameras: {
						ruName: "Экшен-камеры",
						subcategoryPageRuHeading: "Экшен-камеры",
						path: "/actioncamera"
					},
					actionCameraAccessories: {
						ruName: "Аксессуары и крепления для экшен-камер",
						subcategoryPageRuHeading: "Аксессуары и крепления для экшен-камер",
						path: "/actioncamera_acs"
					},
					videocameras: {
						ruName: "Видеокамеры",
						subcategoryPageRuHeading: "Видеокамеры",
						path: "/video"
					},
					photoPrinters: {
						ruName: "Фотопринтеры",
						subcategoryPageRuHeading: "Фотопринтеры",
						path: "/printers?type_print[0]=photoprinter&type_print[operation]=union"
					},
					tripods: {
						ruName: "Штативы",
						subcategoryPageRuHeading: "Штативы",
						path: "/tripod"
					},
					memoryCards: {
						ruName: "Карты памяти",
						subcategoryPageRuHeading: "Карты памяти",
						path: "/memcards"
					},
					photoFrames: {
						ruName: "Цифровые фоторамки",
						subcategoryPageRuHeading: "Цифровые фоторамки",
						path: "/photoframe"
					},
					flashes: {
						ruName: "Вспышки и лампы",
						subcategoryPageRuHeading: "Вспышки и лампы",
						path: "/flashes"
					},
					batteriesAccumulatorsChargers: {
						ruName: "Батарейки, аккумуляторы, зарядные",
						subcategoryPageRuHeading: "Батарейки, аккумуляторы, зарядные",
						path: "/battery"
					},
					cases: {
						ruName: "Сумки и рюкзаки для фото/видео",
						subcategoryPageRuHeading: "Сумки для фото/видеотехники",
						path: "/case"
					},
					cardReaders: {
						ruName: "Карт-ридеры",
						subcategoryPageRuHeading: "Карт-ридеры",
						path: "/cardreaders"
					},
					batteries: {
						ruName: "Аккумуляторы",
						subcategoryPageRuHeading: "Аккумуляторы, ЗУ для фото/видеотехники",
						path: "/batteries"
					},
					photoFilters: {
						ruName: "Светофильтры и конвертеры",
						subcategoryPageRuHeading: "Светофильтры и конвертеры",
						path: "/photofilter"
					}
				}
			},
			videoGames: {
				ruName: "Видеоигры",
				subCategories: {
					consoles: {
						ruName: "Игровые приставки",
						subcategoryPageRuHeading: "Игровые приставки",
						path: "/console"
					},
					consoleGames: {
						ruName: "Игры для приставок",
						subcategoryPageRuHeading: "Игры для приставок",
						path: "/games"
					},
					pcGames: {
						ruName: "Игры для ПК",
						subcategoryPageRuHeading: "Игры для ПК",
						path: "/pcgames"
					},
					virtualReality: {
						ruName: "Очки виртуальной реальности",
						subcategoryPageRuHeading: "Очки виртуальной реальности",
						path: "/virtualreality"
					},
					controllersAndAccessories: {
						ruName: "Игровые контроллеры и аксессуары",
						subcategoryPageRuHeading: "Игровые контроллеры и аксессуары",
						path: "/controllers"
					},
					paymentCards: {
						ruName: "Карты оплаты и подписки",
						subcategoryPageRuHeading: "Карты оплаты и подписки",
						path: "/paymentcard"
					}
				}
			},
			gadgets: {
				ruName: "Гаджеты",
				subCategories: {
					subcategory: {
						ruName: "Умные часы и фитнес-браслеты",
						subcategoryPageRuHeading: "Умные часы и браслеты",
						path: "/smartwatch"
					},
					heartRateMonitorsAndPulseOximeters: {
						ruName: "Пульсометры, пульсоксиметры",
						subcategoryPageRuHeading: "Пульсометры, пульсоксиметры",
						path: "/heart_rate"
					},
					strapsAndBracelets: {
						ruName: "Сменные ремешки и браслеты",
						subcategoryPageRuHeading: "Сменные ремешки и браслеты",
						path: "/replacementstrap"
					},
					virtualReality: {
						ruName: "Очки виртуальной реальности",
						subcategoryPageRuHeading: "Очки виртуальной реальности",
						path: "/virtualreality"
					},
					smartScales: {
						ruName: "Умные весы",
						subcategoryPageRuHeading: "Умные весы",
						path: "/scales?sc_synchronize=1"
					},
					nitratomersDosimeters: {
						ruName: "Нитратомеры, дозиметры, экотестеры",
						subcategoryPageRuHeading: "Нитратомеры, дозиметры, экотестеры",
						path: "/nitrate"
					},
					electronicSteamGenerators: {
						ruName: "Электронные парогенераторы",
						subcategoryPageRuHeading: "Электронные парогенераторы",
						path: "/smoke"
					}
				}
			},
			smarthouseAndSurveillanceVideo: {
				ruName: "Умный дом и видеонаблюдение",
				subCategories: {
					smartHome: {
						ruName: "Умный дом",
						subcategoryPageRuHeading: "Умный дом",
						path: "/smart_home"
					},
					smartThermostats: {
						ruName: "Умные терморегуляторы",
						subcategoryPageRuHeading: "Терморегуляторы",
						path: "/thermostat?smarthome=1"
					},
					smartLightBulbs: {
						ruName: "Умные лампочки",
						subcategoryPageRuHeading: "Лампочки",
						path: "/lightbulb?lib_smartlight=1"
					},
					smartSockets: {
						ruName: "Умные розетки",
						subcategoryPageRuHeading: "Розетки, выключатели",
						path: "/wall_socket?wallsoc_smart=1"
					},
					ipCameras: {
						ruName: "IP-камеры",
						subcategoryPageRuHeading: "IP-камеры",
						path: "/ipcamera"
					},
					videoDoorPhones: {
						ruName: "Видеодомофоны",
						subcategoryPageRuHeading: "Видеодомофоны",
						path: "/videodoorphone"
					},
					cctvCameras: {
						ruName: "Камеры CCTV",
						subcategoryPageRuHeading: "Камеры CCTV",
						path: "/cctvcamera"
					},
					DVRs: {
						ruName: "Видеорегистраторы",
						subcategoryPageRuHeading: "Видеорегистраторы наблюдения",
						path: "/dvr"
					},
					cameraTraps: {
						ruName: "Фотоловушки",
						subcategoryPageRuHeading: "Фотоловушки",
						path: "/camera_traps"
					}
				}
			},
			electricTransport: {
				ruName: "Электрический транспорт",
				subCategories: {
					electricScooters: {
						ruName: "Электросамокаты и электроскутеры",
						subcategoryPageRuHeading: "Электросамокаты и электроскутеры",
						path: "/electric_scooter"
					},
					segways: {
						ruName: "Гироциклы",
						subcategoryPageRuHeading: "Гироциклы",
						path: "/segway"
					},
					electrobikes: {
						ruName: "Электровелосипеды",
						subcategoryPageRuHeading: "Электровелосипеды",
						path: "/electrobike"
					}
				}
			},
			telephonyAndCommunication: {
				ruName: "Телефония и связь",
				subCategories: {
					mobilePhones: {
						ruName: "Мобильные телефоны",
						subcategoryPageRuHeading: "Мобильные телефоны",
						path: "/mobile"
					},
					dectPhones: {
						ruName: "Радиотелефоны DECT",
						subcategoryPageRuHeading: "Радиотелефоны DECT",
						path: "/dect"
					},
					phones: {
						ruName: "Проводные телефоны",
						subcategoryPageRuHeading: "Проводные телефоны",
						path: "/phone"
					},
					wireless3gModems: {
						ruName: "3G-модемы",
						subcategoryPageRuHeading: "Беспроводные адаптеры",
						path: "/wirelessadapter?wa_type%5B0%5D=3g&wa_type%5B1%5D=4g&wa_type%5Boperation%5D=union"
					},
					faxes: {
						ruName: "Факсы",
						subcategoryPageRuHeading: "Факсы",
						path: "/fax"
					},

					portableRadioStations: {
						ruName: "Портативные радиостанции",
						subcategoryPageRuHeading: "Портативные радиостанции",
						path: "/portableradio"
					}
				}
			},
			musicEquipment: {
				ruName: "Музыкальное оборудование",
				subCategories: {
					synthesizersAndWorkstations: {
						ruName: "Синтезаторы и рабочие станции",
						subcategoryPageRuHeading: "Синтезаторы и рабочие станции",
						path: "/synthandworkst"
					},
					audioInterfaces: {
						ruName: "Аудиоинтерфейсы",
						subcategoryPageRuHeading: "Аудиоинтерфейсы",
						path: "/audiointerface"
					},
					concertAcoustics: {
						ruName: "Концертная акустика",
						subcategoryPageRuHeading: "Концертная акустика",
						path: "/concertacoustics"
					},
					studioMonitors: {
						ruName: "Студийные мониторы",
						subcategoryPageRuHeading: "Студийные мониторы",
						path: "/studio_monitor"
					},
					guitarAmps: {
						ruName: "Гитарные комбоусилители",
						subcategoryPageRuHeading: "Гитарные комбоусилители",
						path: "/guitarcombo"
					},
					microphones: {
						ruName: "Микрофоны",
						subcategoryPageRuHeading: "Микрофоны",
						path: "/microphones"
					}
				}
			},
			opticalAppliances: {
				ruName: "Оптические приборы",
				subCategories: {
					binoculars: {
						ruName: "Бинокли и подзорные трубы",
						subcategoryPageRuHeading: "Бинокли и подзорные трубы",
						path: "/optic"
					},
					telescopes: {
						ruName: "Телескопы",
						subcategoryPageRuHeading: "Телескопы",
						path: "/telescope"
					}
				}
			}
		}
	},
	computers: {
		id: 2,
		ruName: "Компьютеры и сети",
		categories: {
			laptopsComputersMonitors: {
				ruName: "Ноутбуки, компьютеры, мониторы",
				subCategories: {
					onePieceComputers: {
						ruName: "Ноутбуки",
						subcategoryPageRuHeading: "Ноутбуки",
						path: "/notebook"
					},
					tablets: {
						ruName: "Планшетные компьютеры",
						subcategoryPageRuHeading: "Планшеты",
						path: "/tabletpc"
					},
					monoblockPcs: {
						ruName: "Моноблоки",
						subcategoryPageRuHeading: "Моноблоки",
						path: "/monoblock"
					},
					desktopPcs: {
						ruName: "Компьютеры",
						subcategoryPageRuHeading: "Компьютеры",
						path: "/desktoppc"
					},
					monitors: {
						ruName: "Мониторы",
						subcategoryPageRuHeading: "Мониторы",
						path: "/display"
					}
				}
			},
			components: {
				ruName: "Комплектующие",
				subCategories: {
					videoCards: {
						ruName: "Видеокарты",
						subcategoryPageRuHeading: "Видеокарты",
						path: "/videocard"
					},
					CPU: {
						ruName: "Процессоры",
						subcategoryPageRuHeading: "Процессоры",
						path: "/cpu"
					},
					motherboards: {
						ruName: "Материнские платы",
						subcategoryPageRuHeading: "Материнские платы",
						path: "/motherboard"
					},
					RAM: {
						ruName: "Оперативная память",
						subcategoryPageRuHeading: "Оперативная память",
						path: "/dram"
					},
					fans: {
						ruName: "Кулеры",
						subcategoryPageRuHeading: "Системы охлаждения",
						path: "/fan"
					},
					SSD: {
						ruName: "SSD",
						subcategoryPageRuHeading: "SSD",
						path: "/ssd"
					},
					HDD: {
						ruName: "Жесткие диски",
						subcategoryPageRuHeading: "Жесткие диски",
						path: "/hdd"
					},
					computerCases: {
						ruName: "Корпуса",
						subcategoryPageRuHeading: "Корпуса",
						path: "/chassis"
					},
					powerSupplies: {
						ruName: "Блоки питания",
						subcategoryPageRuHeading: "Блоки питания",
						path: "/powersupply"
					},
					soundCards: {
						ruName: "Звуковые карты",
						subcategoryPageRuHeading: "Звуковые карты",
						path: "/soundcard?type_soundcard%5B0%5D=internal&type_soundcard%5Boperation%5D=union"
					},
					networkAdapters: {
						ruName: "Сетевые адаптеры",
						subcategoryPageRuHeading: "Сетевые адаптеры",
						path: "/networkadapter"
					},
					opticalDrives: {
						ruName: "Оптические приводы",
						subcategoryPageRuHeading: "Оптические приводы",
						path: "/optical"
					},
					tvTuners: {
						ruName: "ТВ-тюнеры",
						subcategoryPageRuHeading: "ТВ-тюнеры",
						path: "/tvtuner?execution_tvtune%5B0%5D=in&execution_tvtune%5Boperation%5D=union"
					}
				}
			},
			forPrintingAndDesign: {
				ruName: "Техника для печати и дизайна",
				subCategories: {
					printers: {
						ruName: "Принтеры и МФУ",
						subcategoryPageRuHeading: "Принтеры и МФУ",
						path: "/printers"
					},
					scanners: {
						ruName: "Сканеры",
						subcategoryPageRuHeading: "Сканеры",
						path: "/scanner"
					},
					accessoriesForOfficeEquipment: {
						ruName: "Аксессуары для оргтехники",
						subcategoryPageRuHeading: "Аксессуары для оргтехники",
						path: "/officeequip_acs"
					},
					graphicTablets: {
						ruName: "Графические планшеты",
						subcategoryPageRuHeading: "Графические планшеты",
						path: "/tablets"
					},
					cartridges: {
						ruName: "Картриджи",
						subcategoryPageRuHeading: "Картриджи для принтеров и МФУ",
						path: "/cartridges"
					},
					photoPaper: {
						ruName: "Бумага и материалы для печати",
						subcategoryPageRuHeading: "Бумага и материалы для печати",
						path: "/photopaper"
					},
					laminators: {
						ruName: "Ламинаторы",
						subcategoryPageRuHeading: "Ламинаторы",
						path: "/laminator"
					},
					bookletMakers: {
						ruName: "Брошюровщики",
						subcategoryPageRuHeading: "Брошюровщики",
						path: "/bindingmachines"
					},
					matrixPrinters: {
						ruName: "Матричные принтеры",
						subcategoryPageRuHeading: "Матричные принтеры",
						path: "/matrixprinter"
					},
					printers3d: {
						ruName: "3D-принтеры",
						subcategoryPageRuHeading: "3D-принтеры",
						path: "/3dprinter"
					},
					pens3d: {
						ruName: "3D-ручки",
						subcategoryPageRuHeading: "3D-ручки",
						path: "/3d_pen"
					},
					suppliesFor3dPrinting: {
						ruName: "Расходные материалы для 3D-печати",
						subcategoryPageRuHeading: "Расходные материалы для 3D-печати",
						path: "/3d_filament"
					}
				}
			},
			devicesForInputting: {
				ruName: "Манипуляторы и устройства ввода",
				subCategories: {
					mouses: {
						ruName: "Мыши",
						subcategoryPageRuHeading: "Мыши",
						path: "/mouse"
					},
					keyboards: {
						ruName: "Клавиатуры",
						subcategoryPageRuHeading: "Клавиатуры",
						path: "/keyboards"
					},
					controllers: {
						ruName: "Игровые контроллеры и аксессуары",
						subcategoryPageRuHeading: "Игровые контроллеры и аксессуары",
						path: "/controllers"
					},
					graphicTablets: {
						ruName: "Графические планшеты",
						subcategoryPageRuHeading: "Графические планшеты",
						path: "/tablets"
					},
					peripheralKits: {
						ruName: "Наборы периферии (клавиатура + мышь)",
						subcategoryPageRuHeading: "Наборы периферии",
						path: "/peripheralkits"
					},
					mousePads: {
						ruName: "Коврики для мыши",
						subcategoryPageRuHeading: "Коврики для мыши",
						path: "/mousepad"
					}
				}
			},
			dataStorage: {
				ruName: "Хранение данных",
				subCategories: {
					SSD: {
						ruName: "SSD",
						subcategoryPageRuHeading: "SSD",
						path: "/ssd"
					},
					HDD: {
						ruName: "Жесткие диси",
						subcategoryPageRuHeading: "SSD",
						path: "/SSD"
					},
					EXTERNALhDD: {
						ruName: "Внешние накопители (HDD и SSD)",
						subcategoryPageRuHeading: "Внешние накопители",
						path: "/externalhdd"
					},
					USBfLASH: {
						ruName: "Флешки USB",
						subcategoryPageRuHeading: "USB Flash",
						path: "/usbflash"
					},
					memoryCards: {
						ruName: "Карты памяти",
						subcategoryPageRuHeading: "Карты памяти",
						path: "/memcards"
					},
					casesForHdd: {
						ruName: "Боксы для накопителей",
						subcategoryPageRuHeading: "Боксы для накопителей",
						path: "/hddbox"
					},
					NAS: {
						ruName: "Сетевые накопители (NAS)",
						subcategoryPageRuHeading: "Сетевые накопители (NAS)",
						path: "/nas"
					},
					opticalDrives: {
						ruName: "Оптические приводы",
						subcategoryPageRuHeading: "Оптические приводы",
						path: "/optical"
					},
					usbHubs: {
						ruName: "USB-хабы и док-станции",
						subcategoryPageRuHeading: "USB-хабы и док-станции",
						path: "/usbhub"
					},
					cardReaders: {
						ruName: "Карт-ридеры",
						subcategoryPageRuHeading: "Карт-ридеры",
						path: "/cardreaders"
					}
				}
			},
			multimediaComponents: {
				ruName: "Мультимедиа периферия",
				subCategories: {
					pcAcoustics: {
						ruName: "Компьютерная акустика",
						subcategoryPageRuHeading: "Мультимедиа акустика",
						path: "/sound"
					},
					headphones: {
						ruName: "Наушники",
						subcategoryPageRuHeading: "Наушники и гарнитуры",
						path: "/headphones"
					},
					webCameras: {
						ruName: "Веб-камеры",
						subcategoryPageRuHeading: "Web-камеры",
						path: "/webcams"
					},
					ipCameras: {
						ruName: "IP-камеры",
						subcategoryPageRuHeading: "IP-камеры",
						path: "/ipcamera"
					},
					audioInterfaces: {
						ruName: "Аудиоинтерфейсы",
						subcategoryPageRuHeading: "Аудиоинтерфейсы",
						path: "/audiointerface"
					}
				}
			},
			networkHardware: {
				ruName: "Сетевое оборудование",
				subCategories: {
					wirelessRouters: {
						ruName: "Беспроводные маршрутизаторы",
						subcategoryPageRuHeading: "Беспроводные маршрутизаторы",
						path: "/wrouter"
					},
					wirelessAdapters: {
						ruName: "Беспроводные адаптеры",
						subcategoryPageRuHeading: "Беспроводные адаптеры",
						path: "/wirelessadapter"
					},
					switches: {
						ruName: "Коммутаторы",
						subcategoryPageRuHeading: "Коммутаторы",
						path: "/switch"
					},
					dslModemsAndRouters: {
						ruName: "DSL-модемы и маршрутизаторы",
						subcategoryPageRuHeading: "DSL-модемы и маршрутизаторы",
						path: "/dslmodem"
					},
					ipCameras: {
						ruName: "IP-камеры",
						subcategoryPageRuHeading: "IP-камеры",
						path: "/ipcamera"
					},
					NAS: {
						ruName: "NAS",
						subcategoryPageRuHeading: "Сетевые накопители (NAS)",
						path: "/nas"
					},
					wirelessAccessPoints: {
						ruName: "Беспроводные точки доступа",
						subcategoryPageRuHeading: "Беспроводные точки доступа",
						path: "/wirelessap"
					},
					modemsFor3gAnd4G: {
						ruName: "4G и 3G-модемы",
						subcategoryPageRuHeading: "Беспроводные адаптеры",
						path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union"
					},
					networkCables: {
						ruName: "Сетевые кабели",
						subcategoryPageRuHeading: "Кабели для сетевого оборудования",
						path: "/cable?cable_usage%5B0%5D=type4&cable_usage%5Boperation%5D=union"
					},
					cableCrimpingTools: {
						ruName: "Инструмент для обжимки кабелей",
						subcategoryPageRuHeading: "Клещи обжимные",
						path: "/household_tools?ht_type%5B0%5D=crimpingpliers&ht_type%5Boperation%5D=union&order=date:desc"
					},
					networkAdapters: {
						ruName: "Сетевые адаптеры",
						subcategoryPageRuHeading: "Сетевые адаптеры",
						path: "/networkadapter"
					},
					powerlines: {
						ruName: "Сети по электропроводке (Powerline)",
						subcategoryPageRuHeading: "Сети по электропроводке (Powerline)",
						path: "/powerline"
					},
					wirelessAntennas: {
						ruName: "Антенны беспроводной связи",
						subcategoryPageRuHeading: "Антенны беспроводной связи",
						path: "/wantenna"
					}
				}
			},
			laptopAccessories: {
				ruName: "Аксессуары к ноутбукам и компьютерам",
				subCategories: {
					mobilePhones: {
						laptopBackpacks: "Рюкзаки для ноутбуков",
						subcategoryPageRuHeading: "Рюкзаки",
						path: "/backpack?bap_internaldep%5B0%5D=laptoptablet&bap_internaldep%5Boperation%5D=union"
					},
					laptopBags: {
						ruName: "Сумки для ноутбуков",
						subcategoryPageRuHeading: "Сумки для ноутбуков",
						path: "/notebookcase"
					},
					coolingCoasters: {
						ruName: "Охлаждающие подставки",
						subcategoryPageRuHeading: "Подставки для ноутбуков",
						path: "/laptopstand"
					},
					cablesAdaptersSplitters: {
						ruName: "Кабели, адаптеры, разветвители",
						subcategoryPageRuHeading: "Кабели, адаптеры для компьютера",
						path: "/cable?cable_usage%5B0%5D=pc&cable_usage%5Boperation%5D=union"
					},
					mousepads: {
						ruName: "Коврики для мыши",
						subcategoryPageRuHeading: "Коврики для мыши",
						path: "/mousepad"
					},
					accumulatorsAndChargers: {
						ruName: "Аккумуляторы и зарядные устройства",
						subcategoryPageRuHeading: "Аккумуляторы, ЗУ для ноутбуков",
						path: "/nbbatteries?mfr%5B0%5D=for_notebook&mfr%5B1%5D=for_notebook_cha"
					},
					universalChargers: {
						ruName: "Универсальные зарядные устройства",
						subcategoryPageRuHeading: "Зарядные устройства для ноутбуков",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union"
					}
				}
			},
			chargers: {
				ruName: "Электропитание",
				subCategories: {
					ups: {
						ruName: "Источники бесперебойного питания",
						subcategoryPageRuHeading: "Источники бесперебойного питания",
						path: "/ups"
					},
					stabilizersAndSurgeProtectors: {
						ruName: "Стабилизаторы и сетевые фильтры",
						subcategoryPageRuHeading: "Стабилизаторы и сетевые фильтры",
						path: "/voltageregulator"
					},
					laptopBatteries: {
						ruName: "Аккумуляторы для ноутбуков",
						subcategoryPageRuHeading: "Аккумуляторы, ЗУ для ноутбуков",
						path: "/nbbatteries?mfr%5B0%5D=for_notebook"
					},
					chargers: {
						ruName: "Зарядные устройства",
						subcategoryPageRuHeading: "Зарядные устройства для ноутбуков",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union"
					},
					cables: {
						ruName: "Кабели питания",
						subcategoryPageRuHeading: "Кабели, адаптеры IEC 60320",
						path: "/cable?conn1%5B0%5D=c5&conn1%5Boperation%5D=intersect"
					},
					upsBatteries: {
						ruName: "Аккумуляторы для ИБП",
						subcategoryPageRuHeading: "Аккумуляторы для ИБП",
						path: "/ups_battery"
					}
				}
			},
			software: {
				ruName: "Игры и программное обеспечение",
				subCategories: {
					gamesForPc: {
						ruName: "Видеоигры для ПК",
						subcategoryPageRuHeading: "Игры для ПК",
						path: "/pcgames"
					},
					gamesForConsole: {
						ruName: "Видеоигры для консолей",
						subcategoryPageRuHeading: "Игры для приставок",
						path: "/games"
					},
					antiviruses: {
						ruName: "Антивирусы и безопасность",
						subcategoryPageRuHeading: "Антивирусы и безопасность",
						path: "/antivirus"
					},
					paymentCardsAndSubscriptions: {
						ruName: "Карты оплаты и подписки",
						subcategoryPageRuHeading: "Карты оплаты и подписки",
						path: "/paymentcard"
					}
				}
			}
		}
	},
	houseAppliances: {
		id: 3,
		ruName: "Бытовая техника",
		categories: {
			bulkyEquipment: {
				ruName: "Крупногабаритная техника",
				subCategories: {
					refrigerators: {
						ruName: "Холодильники",
						subcategoryPageRuHeading: "Холодильники",
						path: "/refrigerator"
					},
					freezers: {
						ruName: "Морозильники",
						subcategoryPageRuHeading: "Морозильники",
						path: "/refrigerator?type_refrigerato%5B0%5D=chestfreezer&type_refrigerato%5B1%5D=freezer&type_refrigerato%5Boperation%5D=union"
					},
					washingMachines: {
						ruName: "Стиральные машины",
						subcategoryPageRuHeading: "Стиральные машины",
						path: "/washingmachine"
					},
					tumbleDryers: {
						ruName: "Сушильные машины",
						subcategoryPageRuHeading: "Сушильные машины",
						path: "/washingmachine?type_washm_bi[0]=dry_m&type_washm_bi[1]=dryingcabinet&type_washm_bi[operation]=union"
					},
					hoods: {
						ruName: "Вытяжки",
						subcategoryPageRuHeading: "Вытяжки",
						path: "/hoods"
					},
					cookers: {
						ruName: "Кухонные плиты",
						subcategoryPageRuHeading: "Кухонные плиты",
						path: "/cooker"
					},
					dishwashers: {
						ruName: "Посудомоечные машины",
						subcategoryPageRuHeading: "Посудомоечные машины",
						path: "/dishwasher"
					},
					wineRacks: {
						ruName: "Винные шкафы",
						subcategoryPageRuHeading: "Винные шкафы",
						path: "/wine_cabinets"
					},
					accessoriesForLargeHouseholdAppliances: {
						ruName: "Аксессуары для крупной бытовой техники",
						subcategoryPageRuHeading: "Аксессуары для крупной бытовой и встраиваемой техники",
						path: "/largehomeapp_acs"
					}
				}
			},
			builtInAppliances: {
				ruName: "Встраиваемая техника",
				subCategories: {
					hobs: {
						ruName: "Варочные панели",
						subcategoryPageRuHeading: "Варочные панели",
						path: "/hob_cooker"
					},
					ovens: {
						ruName: "Духовые шкафы",
						subcategoryPageRuHeading: "Духовые шкафы",
						path: "/oven_cooker"
					},
					hoods: {
						ruName: "Вытяжки",
						subcategoryPageRuHeading: "Вытяжки",
						path: "/hoods"
					},
					dishwashers: {
						ruName: "Посудомоечные машины",
						subcategoryPageRuHeading: "Встраиваемые посудомоечные машины",
						path: "/dishwasher?location[0]=installation&location[operation]=union"
					},
					refrigerators: {
						ruName: "Холодильники",
						subcategoryPageRuHeading: "Встраиваемые холодильники",
						path: "/refrigerator?location[0]=installation&location[operation]=union"
					},
					washingMachines: {
						ruName: "Стиральные машины",
						subcategoryPageRuHeading: "Встраиваемые стиральные машины",
						path: "/washingmachine?location[0]=installation&location[operation]=union"
					},
					microwave: {
						ruName: "Микроволновые печи",
						subcategoryPageRuHeading: "Встраиваемые микроволновые печи",
						path: "/microvawe?location[0]=installation&location[operation]=union"
					},
					coffeeMachines: {
						ruName: "Кофемашины",
						subcategoryPageRuHeading: "Встраиваемые кофеварки",
						path: "/coffee?location[0]=installation&location[operation]=union"
					},
					foodWasteShredders: {
						ruName: "Измельчители пищевых отходов",
						subcategoryPageRuHeading: "Измельчители пищевых отходов",
						path: "/disposer"
					},
					AccessoriesForBuiltInAppliances: {
						ruName: "Аксессуары для встраиваемой техники",
						subcategoryPageRuHeading: "Аксессуары для крупной бытовой и встраиваемой техники",
						path: "/largehomeapp_acs"
					}
				}
			},
			cleaning: {
				ruName: "Уборка",
				subCategories: {
					vacuumCleaners: {
						ruName: "Пылесосы",
						subcategoryPageRuHeading: "Пылесосы",
						path: "/vacuumcleaner"
					},
					robotCleaners: {
						ruName: "Роботы-пылесосы",
						subcategoryPageRuHeading: "Роботы-пылесосы",
						path: "/robotcleaner"
					},
					vacuumCleanersForWindows: {
						ruName: "Пылесосы для окон",
						subcategoryPageRuHeading: "Пылесосы для окон",
						path: "/vacuumcleaner?vc_type%5B0%5D=windowvc&vc_type%5Boperation%5D=union"
					},
					robotCleanersForWindows: {
						ruName: "Роботы для мытья окон",
						subcategoryPageRuHeading: "Роботы для мытья окон",
						path: "/robotcleaner?robot_type%5B0%5D=1&robot_type%5Boperation%5D=union"
					},
					steamCleaners: {
						ruName: "Пароочистители",
						subcategoryPageRuHeading: "Пароочистители",
						path: "/steamcleaner?steam_type%5B0%5D=purifier&steam_type%5Boperation%5D=union"
					},
					sweepers: {
						ruName: "Электровеники",
						subcategoryPageRuHeading: "Электровеники",
						path: "/sweeper"
					},
					accessoriesForVacuumCleaners: {
						ruName: "Аксессуары для пылесосов, пароочистителей",
						subcategoryPageRuHeading: "Аксессуары для пылесосов, пароочистителей",
						path: "/vacuum_acs"
					}
				}
			},
			clothesCare: {
				ruName: "Уход за одеждой, пошив",
				subCategories: {
					irons: {
						ruName: "Утюги",
						subcategoryPageRuHeading: "Утюги",
						path: "/iron"
					},
					steamers: {
						ruName: "Отпариватели",
						subcategoryPageRuHeading: "Пароочистители и отпариватели",
						path: "/steamcleaner?steam_type%5B0%5D=steamer&steam_type%5B1%5D=ironing_station&steam_type%5B2%5D=steampress&steam_type%5Boperation%5D=union"
					},
					ironingStationsAndPresses: {
						ruName: "Гладильные станции и прессы",
						subcategoryPageRuHeading: "Пароочистители и отпариватели",
						path: "/steamcleaner?steam_type%5B0%5D=ironing_station&steam_type%5B1%5D=steampress&steam_type%5Boperation%5D=union"
					},
					sewingMachines: {
						ruName: "Швейные машины",
						subcategoryPageRuHeading: "Швейные машины",
						path: "/sewingmachines"
					},
					overlocks: {
						ruName: "Оверлоки",
						subcategoryPageRuHeading: "Оверлоки и распошивальные машины",
						path: "/overlock"
					},
					embroideryMachines: {
						ruName: "Вышивальные и швейно-вышивальные машины",
						subcategoryPageRuHeading: "Вышивальные и швейно-вышивальные машины",
						path: "/sewingmachines?embroideryunit=1"
					},
					lintShavers: {
						ruName: "Машинки для удаления катышков",
						subcategoryPageRuHeading: "Машинки для удаления катышков",
						path: "/lintshaver"
					},
					accessoriesForIrons: {
						ruName: "Аксессуары для утюгов, гладильных систем",
						subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
						path: "/climate_acs?cla_purpos%5B0%5D=iron&cla_purpos%5B1%5D=gladsystem&cla_purpos%5B2%5D=press&cla_purpos%5Boperation%5D=union"
					}
				}
			},
			airConditioningEquipment: {
				ruName: "Климатическая техника",
				subCategories: {
					conditioners: {
						ruName: "Кондиционеры",
						subcategoryPageRuHeading: "Кондиционеры",
						path: "/conditioners"
					},
					waterHeater: {
						ruName: "Водонагреватели",
						subcategoryPageRuHeading: "Водонагреватели",
						path: "/waterheater"
					},
					heaters: {
						ruName: "Обогреватели",
						subcategoryPageRuHeading: "Обогреватели",
						path: "/heater"
					},
					humidifiers: {
						ruName: "Увлажнители воздуха",
						subcategoryPageRuHeading: "Увлажнители воздуха",
						path: "/humidifier"
					},
					boilers: {
						ruName: "Отопительные котлы",
						subcategoryPageRuHeading: "Отопительные котлы",
						path: "/boiler"
					},
					blowers: {
						ruName: "Вентиляторы",
						subcategoryPageRuHeading: "Вентиляторы",
						path: "/blower"
					},
					airPurifiers: {
						ruName: "Очистители и мойки воздуха",
						subcategoryPageRuHeading: "Очистители и мойки воздуха",
						path: "/airpurifier"
					},
					supplyAirVents: {
						ruName: "Приточные проветриватели",
						subcategoryPageRuHeading: "Вытяжная и приточная вентиляция",
						path: "/exhaustfan?ef_type%5B0%5D=passprov&ef_type%5B1%5D=recuperator&ef_type%5B2%5D=provbeznagr&ef_type%5B3%5D=provnagr&ef_type%5Boperation%5D=union"
					},
					meteoStations: {
						ruName: "Метеостанции",
						subcategoryPageRuHeading: "Метеостанции",
						path: "/meteostations"
					},
					electricFireplaces: {
						ruName: "Электрокамины",
						subcategoryPageRuHeading: "Электрокамины и биокамины",
						path: "/electrofireplace"
					},
					dehumidifier: {
						ruName: "Осушители воздуха",
						subcategoryPageRuHeading: "Осушители воздуха",
						path: "/dehumidifier"
					},
					insectKillers: {
						ruName: "Электронные уничтожители насекомых",
						subcategoryPageRuHeading: "Уничтожители насекомых, отпугиватели, ловушки",
						path: "/insect_killer"
					},
					accessoriesForClimateEquipment: {
						ruName: "Аксессуары для климатической техники",
						subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
						path: "/climate_acs?cla_purpos%5B0%5D=humid&cla_purpos%5B1%5D=aircleaner&cla_purpos%5B2%5D=condic&cla_purpos%5Boperation%5D=union"
					}
				}
			},
			cooking: {
				ruName: "Приготовление пищи",
				subCategories: {
					microwaves: {
						ruName: "Микроволновые печи",
						subcategoryPageRuHeading: "Микроволновые печи",
						path: "/microvawe"
					},
					multicookers: {
						ruName: "Мультиварки",
						subcategoryPageRuHeading: "Мультиварки",
						path: "/multicooker"
					},
					tabletopCookers: {
						ruName: "Настольные плиты",
						subcategoryPageRuHeading: "Настольные плиты",
						path: "/tabletop_cooker"
					},
					roasters: {
						ruName: "Мини-печи",
						subcategoryPageRuHeading: "Мини-печи (ростеры)",
						path: "/roaster"
					},
					toasters: {
						ruName: "Тостеры",
						subcategoryPageRuHeading: "Тостеры",
						path: "/toaster"
					},
					waffleMakers: {
						ruName: "Вафельницы",
						subcategoryPageRuHeading: "Вафельницы",
						path: "/waffle"
					},
					sandwichers: {
						ruName: "Сэндвичницы",
						subcategoryPageRuHeading: "Сэндвичницы",
						path: "/sandwichers"
					},
					aerogrills: {
						ruName: "Аэрогрили",
						subcategoryPageRuHeading: "Аэрогрили",
						path: "/aerogrill"
					},
					breadMakers: {
						ruName: "Хлебопечки",
						subcategoryPageRuHeading: "Хлебопечки",
						path: "/breadmaker"
					},
					electricGrills: {
						ruName: "Электрогрили",
						subcategoryPageRuHeading: "Электрогрили",
						path: "/electricgrill"
					},
					electricSkewers: {
						ruName: "Электрошашлычницы",
						subcategoryPageRuHeading: "Электрошашлычницы",
						path: "/electrobarbecue"
					},
					steamers: {
						ruName: "Пароварки",
						subcategoryPageRuHeading: "Пароварки",
						path: "/steamers"
					},
					yogurtMakers: {
						ruName: "Йогуртницы и мороженицы",
						subcategoryPageRuHeading: "Йогуртницы",
						path: "/yogurtmaker"
					},
					deepFryers: {
						ruName: "Фритюрницы",
						subcategoryPageRuHeading: "Фритюрницы",
						path: "/fryer"
					},
					crepeMakers: {
						ruName: "Блинницы",
						subcategoryPageRuHeading: "Блинницы",
						path: "/crepemaker"
					},
					eggMakers: {
						ruName: "Яйцеварки",
						subcategoryPageRuHeading: "Яйцеварки",
						path: "/eggmaker"
					},
					accessoriesForKitchenEquipment: {
						ruName: "Аксессуары для кухонной техники",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs"
					}
				}
			},
			teaAndCoffeePreparation: {
				ruName: "Приготовление кофе и чая",
				subCategories: {
					coffeeMachines: {
						ruName: "Кофемашины",
						subcategoryPageRuHeading: "Кофемашины",
						path: "/coffee?type_coffee[0]=coffee_machine&type_coffee[operation]=union"
					},
					coffeeMakers: {
						ruName: "Кофеварки",
						subcategoryPageRuHeading: "Кофеварки",
						path: "/coffee?type_coffee[0]=espresso_coffee&type_coffee[1]=dropping_coffee&type_coffee[2]=boiler&type_coffee[3]=turkey&type_coffee[4]=pour_over&type_coffee[5]=geyzernaya_coffe&type_coffee[operation]=union"
					},
					capsuleCoffeeMakersAndCoffeeMachines: {
						ruName: "Капсульные кофеварки и кофемашины",
						subcategoryPageRuHeading: "Капсульные кофеварки и кофемашины",
						path: "/coffee?type_coffee[0]=capsules&type_coffee[1]=capsule_machine&type_coffee[operation]=union"
					},
					electricKettles: {
						ruName: "Электрочайники и термопоты",
						subcategoryPageRuHeading: "Чайники и термопоты",
						path: "/kettle"
					},
					kettles: {
						ruName: "Чайники",
						subcategoryPageRuHeading: "Чайники",
						path: "/kettles"
					},
					teapots: {
						ruName: "Заварочные чайники, кофеварки, френч-прессы",
						subcategoryPageRuHeading: "Заварочные чайники, кофеварки, френч-прессы",
						path: "/teapot"
					},
					coffeeGrinders: {
						ruName: "Кофемолки",
						subcategoryPageRuHeading: "Кофемолки",
						path: "/coffeegrinders"
					},
					milkFrothers: {
						ruName: "Вспениватели молока",
						subcategoryPageRuHeading: "Вспениватели молока",
						path: "/milkfrother"
					},
					coffee: {
						ruName: "Кофе",
						subcategoryPageRuHeading: "Кофе",
						path: "/coffeejava"
					},
					tea: {
						ruName: "Чай",
						subcategoryPageRuHeading: "Чай (раздел закрыт)",
						path: "/tea"
					},
					accessoriesForCoffeeMachinesAndKettles: {
						ruName: "Аксессуары для кофемашин, кофеварок, чайников",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type4&ka_purpos%5B1%5D=kettletermopot&ka_purpos%5Boperation%5D=union"
					}
				}
			},
			foodPreparation: {
				ruName: "Подготовка и обработка продуктов",
				subCategories: {
					blenders: {
						ruName: "Блендеры",
						subcategoryPageRuHeading: "Блендеры",
						path: "/blender"
					},
					foodProcessors: {
						ruName: "Кухонные комбайны",
						subcategoryPageRuHeading: "Кухонные комбайны",
						path: "/foodprocessors"
					},
					meatGrinders: {
						ruName: "Мясорубки",
						subcategoryPageRuHeading: "Мясорубки",
						path: "/meatgrinder"
					},
					mixers: {
						ruName: "Миксеры",
						subcategoryPageRuHeading: "Миксеры",
						path: "/mixer"
					},
					juicers: {
						ruName: "Соковыжималки",
						subcategoryPageRuHeading: "Соковыжималки",
						path: "/juicer"
					},
					foodDehydrators: {
						ruName: "Сушилки для овощей и фруктов",
						subcategoryPageRuHeading: "Сушилки для овощей и фруктов",
						path: "/food_dehydrator"
					},
					kitchenScales: {
						ruName: "Кухонные весы",
						subcategoryPageRuHeading: "Кухонные весы",
						path: "/kitchenscales"
					},
					slicers: {
						ruName: "Ломтерезки",
						subcategoryPageRuHeading: "Ломтерезки",
						path: "/slicer"
					},
					choppers: {
						ruName: "Измельчители (чопперы)",
						subcategoryPageRuHeading: "Измельчители (чопперы)",
						path: "/chopper"
					},
					vacuumPackers: {
						ruName: "Вакуумные упаковщики",
						subcategoryPageRuHeading: "Вакуумные упаковщики",
						path: "/vacuummachine"
					},
					marinators: {
						ruName: "Маринаторы",
						subcategoryPageRuHeading: "Маринаторы",
						path: "/marinator"
					},
					accessoriesForFoodProcessingEquipment: {
						ruName: "Аксессуары для кухонной техники",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs"
					}
				}
			},
			bodyAndHairCare: {
				ruName: "Уход за волосами и телом",
				subCategories: {
					hairClippers: {
						ruName: "Машинки для стрижки волос",
						subcategoryPageRuHeading: "Машинки для стрижки волос",
						path: "/hairclipper"
					},
					curlingIronsStylers: {
						ruName: "Плойки, стайлеры, щипцы",
						subcategoryPageRuHeading: "Стайлеры",
						path: "/styler"
					},
					hairDryers: {
						ruName: "Фены",
						subcategoryPageRuHeading: "Фены",
						path: "/hairdryer"
					},
					toothBrushes: {
						ruName: "Зубные щетки и ирригаторы",
						subcategoryPageRuHeading: "Зубные щетки и ирригаторы",
						path: "/toothbrush"
					},
					shavers: {
						ruName: "Мужские электробритвы",
						subcategoryPageRuHeading: "Электробритвы мужские",
						path: "/shaver"
					},
					ladyShavers: {
						ruName: "Женские электробритвы и эпиляторы",
						subcategoryPageRuHeading: "Женские электробритвы и эпиляторы",
						path: "/ladyshaver"
					},
					scales: {
						ruName: "Напольные весы",
						subcategoryPageRuHeading: "Напольные весы",
						path: "/scales"
					},
					hydromassageBaths: {
						ruName: "Гидромассажные ванночки",
						subcategoryPageRuHeading: "Гидромассажные ванночки для ног",
						path: "/footbath"
					},
					manicureAndPedicureSets: {
						ruName: "Маникюрные и педикюрные наборы",
						subcategoryPageRuHeading: "Маникюрные и педикюрные наборы",
						path: "/manicure"
					},
					accessoriesForBeautyEquipment: {
						ruName: "Аксессуары к товарам для красоты и здоровья",
						subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs"
					}
				}
			},
			healthEquipment: {
				ruName: "Техника для здоровья",
				subCategories: {
					inhalers: {
						ruName: "Ингаляторы",
						subcategoryPageRuHeading: "Ингаляторы",
						path: "/inhaler"
					},
					toothBrushes: {
						ruName: "Зубные щетки и ирригаторы",
						subcategoryPageRuHeading: "Зубные щетки и ирригаторы",
						path: "/toothbrush"
					},
					tonometers: {
						ruName: "Тонометры",
						subcategoryPageRuHeading: "Тонометры",
						path: "/tonometers"
					},
					thermometers: {
						ruName: "Термометры",
						subcategoryPageRuHeading: "Медицинские термометры",
						path: "/medthermometer"
					},
					glucoseMeter: {
						ruName: "Глюкометры",
						subcategoryPageRuHeading: "Глюкометры",
						path: "/glucosemeter"
					},
					heartRateMonitors: {
						ruName: "Пульсометры, пульсоксиметры",
						subcategoryPageRuHeading: "Пульсометры, пульсоксиметры",
						path: "/heart_rate"
					},
					contactLenses: {
						ruName: "Контактные линзы",
						subcategoryPageRuHeading: "Контактные линзы",
						path: "/contact_lense"
					},
					lensSolutions: {
						ruName: "Растворы для линз",
						subcategoryPageRuHeading: "Растворы для линз",
						path: "/solutionlenses"
					},
					accessoriesForHealthEquipment: {
						ruName: "Аксессуары к товарам для красоты и здоровья",
						subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs"
					}
				}
			},
			accessoriesAndPeripheral: {
				ruName: "Аксессуары и сопутствующие товары",
				subCategories: {
					laundryDryers: {
						ruName: "Сушилки для белья",
						subcategoryPageRuHeading: "Сушилки для белья",
						path: "/linendryer"
					},
					ironinBboards: {
						ruName: "Гладильные доски",
						subcategoryPageRuHeading: "Гладильные доски",
						path: "/ironingboard"
					},
					washingPowder: {
						ruName: "Средства для стирки и ухода за бельем",
						subcategoryPageRuHeading: "Стиральные порошки",
						path: "/washingpowder"
					},
					dishwasherTools: {
						ruName: "Средства для посудомоечных машин",
						subcategoryPageRuHeading: "Таблетки для посудомоечных машин",
						path: "/dishwashertablet"
					},
					accessoriesForCoffeeMachinesAndKettles: {
						ruName: "Аксессуары для кофемашин, кофеварок, чайников",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type4&ka_purpos%5B1%5D=kettletermopot&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForBlendersGrinders: {
						ruName: "Аксессуары для блендеров, комбайнов, мясорубок",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type3&ka_purpos%5B1%5D=type2&ka_purpos%5B2%5D=type1&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForVacuumPackers: {
						ruName: "Аксессуары для вакуумных упаковщиков",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs?ka_purpos%5B0%5D=vacuumupakov&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForMultiCookers: {
						ruName: "Аксессуары для мультиварок, аэрогрилей",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type6&ka_purpos%5B1%5D=type12&ka_purpos%5Boperation%5D=union"
					},
					replaceablePanelsForSandwichMakers: {
						ruName: "Сменные панели для сэндвичниц",
						subcategoryPageRuHeading: "Аксессуары для кухонной техники",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type7&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForTooyhBrushes: {
						ruName: "Аксессуары для зубных щеток и ирригаторов",
						subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs?ba_purpos%5B0%5D=type1&ba_purpos%5B1%5D=type2&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForShavers: {
						ruName: "Аксессуары для электробритв и машинок",
						subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs?ba_purpos%5B0%5D=type4&ba_purpos%5B1%5D=type7&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForSkinCareProducts: {
						ruName: "Аксессуары для приборов по уходу за кожей",
						subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs?ba_purpos%5B0%5D=type3&ba_purpos%5B1%5D=faceclean&ba_purpos%5B2%5D=manicure&ba_purpos%5Boperation%5D=union"
					},
					replaceableRazorBlades: {
						ruName: "Сменные лезвия для бритвенных станков",
						subcategoryPageRuHeading: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs?ba_purpos%5B0%5D=britvstanok&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForVacuumCleaners: {
						ruName: "Аксессуары для пылесосов",
						subcategoryPageRuHeading: "Аксессуары для пылесосов, пароочистителей",
						path: "/vacuum_acs?va_purpos%5B0%5D=vacuumcleaner&va_purpos%5B1%5D=robotcleaner&va_purpos%5B2%5D=floorcleaner&va_purpos%5Boperation%5D=union"
					},
					accessoriesForSteamCleaners: {
						ruName: "Аксессуары для пароочистителей",
						subcategoryPageRuHeading: "Аксессуары для пылесосов, пароочистителей",
						path: "/vacuum_acs?va_purpos%5B0%5D=steamcleaner&va_purpos%5Boperation%5D=union"
					},
					accessoriesForLargeHouseholdAndBuiltInAppliances: {
						ruName: "Аксессуары для крупной бытовой и встраиваемой техники",
						subcategoryPageRuHeading: "Аксессуары для крупной бытовой и встраиваемой техники",
						path: "/largehomeapp_acs"
					},
					accessoriesForIrons: {
						ruName: "Аксессуары для утюгов, гладильных систем",
						subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
						path: "/climate_acs?cla_purpos%5B0%5D=iron&cla_purpos%5B1%5D=gladsystem&cla_purpos%5B2%5D=press&cla_purpos%5Boperation%5D=union"
					},
					accessoriesForClimateEquipment: {
						ruName: "Аксессуары для климатической техники",
						subcategoryPageRuHeading: "Аксессуары для утюгов, увлажнителей и очистителей воздуха",
						path: "/climate_acs?cla_purpos%5B0%5D=humid&cla_purpos%5B1%5D=aircleaner&cla_purpos%5B2%5D=condic&cla_purpos%5Boperation%5D=union"
					}
				}
			}
		}
	},
	constructionAndRepair: {
		id: 4,
		ruName: "Стройка и ремонт",
		categories: {
			tools: {
				ruName: "Инструмент",
				subCategories: {
					drills: {
						ruName: "Электродрели и дрели-шуруповерты",
						subcategoryPageRuHeading: "Электродрели и дрели-шуруповерты",
						path: "/drills"
					},
					rotaryhammers: {
						ruName: "Перфораторы",
						subcategoryPageRuHeading: "Перфораторы",
						path: "/rotaryhammers"
					},
					toolKits: {
						ruName: "Наборы ручных инструментов",
						subcategoryPageRuHeading: "Наборы инструментов",
						path: "/tool_kits"
					},
					electricScrewdrivers: {
						ruName: "Электроотвертки",
						subcategoryPageRuHeading: "Электроотвертки",
						path: "/screwdriver?typescrewdriver[0]=simplescrewdrive&typescrewdriver[operation]=union"
					},
					screwdrivers: {
						ruName: "Шуруповерты, винтоверты",
						subcategoryPageRuHeading: "Шуруповерты, винтоверты",
						path: "/screwdriver?typescrewdriver[0]=hardscrewdrive&typescrewdriver[1]=vintovert&typescrewdriver[operation]=union"
					},
					toolsAccumulators: {
						ruName: "Аккумуляторы и зарядные устройства для инструмента",
						subcategoryPageRuHeading: "Аккумуляторы и зарядные устройства для инструмента",
						path: "/tools_accum"
					},
					drillsMixers: {
						ruName: "Дрели-миксеры",
						subcategoryPageRuHeading: "Дрели-миксеры",
						path: "/drills?type_drill[0]=drill_mixer&type_drill[operation]=union"
					},
					angleGrinders: {
						ruName: "Угловые шлифмашины (болгарки)",
						subcategoryPageRuHeading: "Угловые шлифмашины (болгарки)",
						path: "/angle_grinder"
					},
					grinders: {
						ruName: "Шлифмашины",
						subcategoryPageRuHeading: "Шлифмашины",
						path: "/grinder"
					},
					polishingMachines: {
						ruName: "Полировальные машины",
						subcategoryPageRuHeading: "Полировальные шлифмашины",
						path: "/grinder?tupe_grinder[0]=polish&tupe_grinder[operation]=union"
					},
					multiTools: {
						ruName: "Мультитулы",
						subcategoryPageRuHeading: "Мультифункциональные шлифмашины",
						path: "/grinder?tupe_grinder[0]=multi_grinder&tupe_grinder[operation]=union"
					},
					circularSaws: {
						ruName: "Дисковые пилы",
						subcategoryPageRuHeading: "Дисковые пилы",
						path: "/electric_saw?type_saw[0]=disk&type_saw[operation]=union"
					},
					reciprocatingSaws: {
						ruName: "Сабельные пилы",
						subcategoryPageRuHeading: "Сабельные пилы",
						path: "/electric_saw?type_saw[0]=saber&type_saw[operation]=union"
					},
					fretSaws: {
						ruName: "Лобзики",
						subcategoryPageRuHeading: "Электролобзики",
						path: "/fretsaw"
					},
					planes: {
						ruName: "Рубанки",
						subcategoryPageRuHeading: "Рубанки",
						path: "/plane"
					},
					tools: {
						ruName: "Строительный, слесарный, монтажный инструмент",
						subcategoryPageRuHeading: "Строительный, слесарный, монтажный инструмент",
						path: "/household_tools"
					},
					toolBoxes: {
						ruName: "Ящики для инструментов",
						subcategoryPageRuHeading: "Ящики для инструментов",
						path: "/toolbox"
					},
					millingCutters: {
						ruName: "Фрезеры",
						subcategoryPageRuHeading: "Фрезеры",
						path: "/woodrouter"
					},
					industrialDryers: {
						ruName: "Промышленные фены",
						subcategoryPageRuHeading: "Промышленные фены",
						path: "/industrialdryer"
					},
					hotGlueGuns: {
						ruName: "Термоклеевые пистолеты",
						subcategoryPageRuHeading: "Термоклеевые пистолеты",
						path: "/hotgluegun"
					},
					engravers: {
						ruName: "Граверы",
						subcategoryPageRuHeading: "Граверы",
						path: "/engraver"
					},
					householdVacuumCleaners: {
						ruName: "Хозяйственные пылесосы",
						subcategoryPageRuHeading: "Хозяйственные пылесосы",
						path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union"
					},
					sprayGuns: {
						ruName: "Краскораспылители",
						subcategoryPageRuHeading: "Электрические краскораспылители",
						path: "/electricspraygun"
					},
					wallChasers: {
						ruName: "Штроборезы",
						subcategoryPageRuHeading: "Штроборезы",
						path: "/wallchaser"
					},
					tileCutters: {
						ruName: "Плиткорезы",
						subcategoryPageRuHeading: "Плиткорезы",
						path: "/tilecutter"
					},
					solderingIrons: {
						ruName: "Паяльники и паяльные лампы",
						subcategoryPageRuHeading: "Паяльники и паяльные лампы",
						path: "/solderingiron"
					},
					pipeWeldingMachines: {
						ruName: "Аппараты для сварки труб",
						subcategoryPageRuHeading: "Аппараты для сварки труб",
						path: "/pipe_welding"
					},
					electricJackhammers: {
						ruName: "Электрические отбойные молотки",
						subcategoryPageRuHeading: "Электрические отбойные молотки",
						path: "/jackhammer?jh_type[0]=electric&jh_type[operation]=union"
					},
					electricMetalCutters: {
						ruName: "Электрические ножницы по металлу",
						subcategoryPageRuHeading: "Электрические ножницы по металлу",
						path: "/metal_cutter"
					},
					nailers: {
						ruName: "Скобозабиватели, гвоздезабиватели, степлеры",
						subcategoryPageRuHeading: "Скобозабиватели, гвоздезабиватели, степлеры",
						path: "/nailer"
					},
					thermalImaging: {
						ruName: "Диагностические тепловизоры и пирометры",
						subcategoryPageRuHeading: "Диагностические тепловизоры и пирометры",
						path: "/thermal_imaging"
					}
				}
			},
			buildingEquipment: {
				ruName: "Строительное оборудование",
				subCategories: {
					welders: {
						ruName: "Сварочные аппараты",
						subcategoryPageRuHeading: "Сварочные инверторы",
						path: "/weldinginverter"
					},
					compressors: {
						ruName: "Компрессоры",
						subcategoryPageRuHeading: "Компрессоры",
						path: "/compressor"
					},
					laserLevels: {
						ruName: "Лазерные нивелиры",
						subcategoryPageRuHeading: "Лазерные нивелиры",
						path: "/laserlevel"
					},
					heatGuns: {
						ruName: "Тепловые пушки",
						subcategoryPageRuHeading: "Тепловые пушки",
						path: "/heat_gun"
					},
					generators: {
						ruName: "Генераторы",
						subcategoryPageRuHeading: "Генераторы",
						path: "/powerstations"
					},
					concreteMixers: {
						ruName: "Бетономешалки",
						subcategoryPageRuHeading: "Бетономешалки",
						path: "/concrete"
					},
					weldingMasks: {
						ruName: "Сварочные маски",
						subcategoryPageRuHeading: "Сварочные маски",
						path: "/weldingmask"
					},
					householdVacuumCleaners: {
						ruName: "Хозяйственные пылесосы",
						subcategoryPageRuHeading: "Хозяйственные пылесосы",
						path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union"
					},
					wheelbarrows: {
						ruName: "Строительные тачки",
						subcategoryPageRuHeading: "Садовые и строительные тачки",
						path: "/barrow"
					},
					stairsAndLadders: {
						ruName: "Лестницы и стремянки",
						subcategoryPageRuHeading: "Лестницы и стремянки",
						path: "/stairandladder"
					},
					laserRangefinders: {
						ruName: "Лазерные дальномеры",
						subcategoryPageRuHeading: "Лазерные дальномеры",
						path: "/laserdistmeter"
					},
					vibratingPlates: {
						ruName: "Виброплиты",
						subcategoryPageRuHeading: "Виброплиты",
						path: "/platecompactor"
					},
					jackhammers: {
						ruName: "Отбойные молотки",
						subcategoryPageRuHeading: "Отбойные молотки",
						path: "/jackhammer"
					},
					electricAndGasCutters: {
						ruName: "Электро- и бензорезы",
						subcategoryPageRuHeading: "Электро- и бензорезы",
						path: "/powercutter"
					},
					motorPumps: {
						ruName: "Мотопомпы",
						subcategoryPageRuHeading: "Мотопомпы",
						path: "/motopump"
					}
				}
			},
			floorCoverings: {
				ruName: "Напольные покрытия",
				subCategories: {
					laminate: {
						ruName: "Ламинат",
						subcategoryPageRuHeading: "Ламинат",
						path: "/laminate"
					},
					linoleum: {
						ruName: "Линолеум",
						subcategoryPageRuHeading: "Линолеум",
						path: "/linoleum"
					},
					vinylFloor: {
						ruName: "Виниловые полы",
						subcategoryPageRuHeading: "Виниловые полы",
						path: "/vinyl_floor"
					},
					tile: {
						ruName: "Плитка",
						subcategoryPageRuHeading: "Напольная плитка",
						path: "/tile?t_kind%5B0%5D=floor&t_kind%5Boperation%5D=union"
					},
					parquetBoard: {
						ruName: "Паркетная доска",
						subcategoryPageRuHeading: "Паркетная доска",
						path: "/parquetboard"
					}
				}
			},
			plumbing: {
				ruName: "Сантехника",
				subCategories: {
					kitchenSinks: {
						ruName: "Кухонные мойки",
						subcategoryPageRuHeading: "Кухонные мойки",
						path: "/kitchensink"
					},
					faucets: {
						ruName: "Смесители",
						subcategoryPageRuHeading: "Смесители",
						path: "/faucet"
					},
					bathtubs: {
						ruName: "Ванны",
						subcategoryPageRuHeading: "Ванны",
						path: "/bathtub"
					},
					towelWarmers: {
						ruName: "Полотенцесушители",
						subcategoryPageRuHeading: "Полотенцесушители",
						path: "/towelrail"
					},
					showerCabins: {
						ruName: "Душевые кабины",
						subcategoryPageRuHeading: "Душевые кабины",
						path: "/showerbox"
					},
					washbasins: {
						ruName: "Умывальники",
						subcategoryPageRuHeading: "Умывальники",
						path: "/washbasin"
					},
					pedestalForWashbasins: {
						ruName: "Пьедесталы для умывальников",
						subcategoryPageRuHeading: "Пьедесталы для умывальников",
						path: "/pedestal"
					},
					siphons: {
						ruName: "Сифоны",
						subcategoryPageRuHeading: "Сифоны",
						path: "/siphon"
					},
					pans: {
						ruName: "Унитазы",
						subcategoryPageRuHeading: "Унитазы",
						path: "/wcpan"
					},
					bidets: {
						ruName: "Биде",
						subcategoryPageRuHeading: "Биде",
						path: "/bidet"
					},
					installationsForPansSinksBidets: {
						ruName: "Инсталляции для унитазов, раковин, биде и писсуаров",
						subcategoryPageRuHeading: "Инсталляции для унитазов, раковин, биде и писсуаров",
						path: "/installations"
					},
					flushingSystems: {
						ruName: "Клавиши и системы смыва",
						subcategoryPageRuHeading: "Клавиши и системы смыва",
						path: "/flushing_system"
					},
					electronicBidetCovers: {
						ruName: "Электронные крышки-биде",
						subcategoryPageRuHeading: "Электронные крышки-биде",
						path: "/toilet_shower"
					},
					dryClosets: {
						ruName: "Биотуалеты",
						subcategoryPageRuHeading: "Биотуалеты",
						path: "/biotoilet"
					},
					showerPanels: {
						ruName: "Душевые панели и гарнитуры",
						subcategoryPageRuHeading: "Душевые панели и гарнитуры",
						path: "/shower"
					},
					showerTrays: {
						ruName: "Душевые поддоны",
						subcategoryPageRuHeading: "Душевые поддоны",
						path: "/shower_trays"
					},
					dispensers: {
						ruName: "Дозаторы, диспенсеры",
						subcategoryPageRuHeading: "Дозаторы, диспенсеры",
						path: "/dispenser"
					},
					handsDryers: {
						ruName: "Сушилки для рук, волос",
						subcategoryPageRuHeading: "Сушилки для рук, волос",
						path: "/handsdryer"
					}
				}
			},
			waterSupplySewerageVentilation: {
				ruName: "Водоснабжение, канализация, вентиляция",
				subCategories: {
					waterHeaters: {
						ruName: "Водонагреватели",
						subcategoryPageRuHeading: "Водонагреватели",
						path: "/waterheater"
					},
					pumps: {
						ruName: "Насосы",
						subcategoryPageRuHeading: "Насосы",
						path: "/pump"
					},
					exhaustFans: {
						ruName: "Приточные и вытяжные вентиляторы",
						subcategoryPageRuHeading: "Вытяжная и приточная вентиляция",
						path: "/exhaustfan"
					},
					supplyAirVents: {
						ruName: "Приточные проветриватели",
						subcategoryPageRuHeading: "Вытяжная и приточная вентиляция",
						path: "/exhaustfan?ef_type%5B0%5D=passprov&ef_type%5B1%5D=recuperator&ef_type%5B2%5D=provbeznagr&ef_type%5B3%5D=provnagr&ef_type%5Boperation%5D=union"
					},
					waterAccumulators: {
						ruName: "Гидроаккумуляторы",
						subcategoryPageRuHeading: "Гидроаккумуляторы",
						path: "/hydroaccum?ha_type%5B0%5D=type1&ha_type%5Boperation%5D=union"
					},
					pipesAndFittings: {
						ruName: "Трубы, фитинг",
						subcategoryPageRuHeading: "Трубы, фитинг",
						path: "/tube_fitting"
					},
					accessPanels: {
						ruName: "Сантехнические ревизионные люки",
						subcategoryPageRuHeading: "Сантехнические ревизионные люки",
						path: "/access_panel"
					},
					waterAndGasPipes: {
						ruName: "Трубы водогазопроводные",
						subcategoryPageRuHeading: "Водогазопроводные трубы",
						path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union"
					},
					boilers: {
						ruName: "Отопительные котлы",
						subcategoryPageRuHeading: "Отопительные котлы",
						path: "/boiler"
					},
					radiators: {
						ruName: "Радиаторы отопления",
						subcategoryPageRuHeading: "Радиаторы отопления",
						path: "/radiators"
					}
				}
			},
			powerSupply: {
				ruName: "Электроснабжение",
				subCategories: {
					socketsAndSwitches: {
						ruName: "Розетки, выключатели",
						subcategoryPageRuHeading: "Розетки, выключатели",
						path: "/wall_socket"
					},
					multimeters: {
						ruName: "Мультиметры, токовые клещи, индикаторные отвертки",
						subcategoryPageRuHeading: "Мультиметры, токовые клещи, индикаторные отвертки",
						path: "/multimeter"
					},
					chandeliersAndLamps: {
						ruName: "Люстры и светильники",
						subcategoryPageRuHeading: "Люстры и светильники",
						path: "/luster"
					},
					bulbs: {
						ruName: "Лампочки",
						subcategoryPageRuHeading: "Лампочки",
						path: "/lightbulb"
					},
					stabilizersAndSurgeProtectors: {
						ruName: "Стабилизаторы и сетевые фильтры",
						subcategoryPageRuHeading: "Стабилизаторы и сетевые фильтры",
						path: "/voltageregulator?voltage_type[0]=stabilizer&voltage_type[operation]=union"
					},
					generators: {
						ruName: "Генераторы",
						subcategoryPageRuHeading: "Генераторы",
						path: "/powerstations"
					}
				}
			},
			heating: {
				ruName: "Отопление, теплоизоляция",
				subCategories: {
					boilers: {
						ruName: "Отопительные котлы",
						subcategoryPageRuHeading: "Отопительные котлы",
						path: "/boiler"
					},
					pumpForHeatingSystems: {
						ruName: "Насосы для систем отопления",
						subcategoryPageRuHeading: "Циркуляционные насосы для отопления",
						path: "/pump?pump_purpose%5B0%5D=heating&pump_purpose%5Boperation%5D=union"
					},
					radiators: {
						ruName: "Радиаторы отопления",
						subcategoryPageRuHeading: "Радиаторы отопления",
						path: "/radiators"
					},
					thermalInsulation: {
						ruName: "Теплоизоляция",
						subcategoryPageRuHeading: "Теплоизоляция",
						path: "/therminsulation"
					},
					soundAndVibrationIsolation: {
						ruName: "Звуко- и виброизоляция помещений",
						subcategoryPageRuHeading: "Звуко- и виброизоляция помещений",
						path: "/soundproofing"
					},
					warmFloor: {
						ruName: "Теплые полы",
						subcategoryPageRuHeading: "Теплые полы",
						path: "/heatedfloor"
					},
					towelWarmers: {
						ruName: "Полотенцесушители",
						subcategoryPageRuHeading: "Полотенцесушители",
						path: "/towelrail"
					},
					temperatureControllers: {
						ruName: "Терморегуляторы",
						subcategoryPageRuHeading: "Терморегуляторы",
						path: "/thermostat"
					},
					fireplaces: {
						ruName: "Дровяные камины, печи-камины, порталы",
						subcategoryPageRuHeading: "Дровяные камины, печи-камины, порталы",
						path: "/stove"
					},
					expansionTanks: {
						ruName: "Расширительные баки",
						subcategoryPageRuHeading: "Расширительные баки",
						path: "/hydroaccum?ha_type%5B0%5D=type2&ha_type%5Boperation%5D=union"
					},
					tubesAndFittings: {
						ruName: "Трубы, фитинг",
						subcategoryPageRuHeading: "Трубы для отопления",
						path: "/tube_fitting?tube_use%5B0%5D=3&tube_use%5Boperation%5D=union"
					},
					waterAndGasPipes: {
						ruName: "Трубы водогазопроводные",
						subcategoryPageRuHeading: "Водогазопроводные трубы",
						path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union"
					}
				}
			},
			doorsAndWindows: {
				ruName: "Двери, окна",
				subCategories: {
					metalDoors: {
						ruName: "Металлические двери",
						subcategoryPageRuHeading: "Металлические двери",
						path: "/steeldoor"
					},
					interiorDoors: {
						ruName: "Межкомнатные двери",
						subcategoryPageRuHeading: "Межкомнатные двери",
						path: "/interiordoor"
					},
					pvcWindows: {
						ruName: "Окна ПВХ",
						subcategoryPageRuHeading: "Окна ПВХ",
						path: "/vynilwindows"
					}
				}
			},
			pneumaticTools: {
				ruName: "Пневмоинструменты",
				subCategories: {
					compressors: {
						ruName: "Компрессоры",
						subcategoryPageRuHeading: "Компрессоры",
						path: "/compressor"
					},
					sprayGuns: {
						ruName: "Краскопульты",
						subcategoryPageRuHeading: "Пневматические краскопульты",
						path: "/spraygun"
					},
					wrenches: {
						ruName: "Гайковерты",
						subcategoryPageRuHeading: "Пневматические гайковерты",
						path: "/wrench"
					},
					nailers: {
						ruName: "Скобозабиватели, гвоздезабиватели, степлеры",
						subcategoryPageRuHeading: "Скобозабиватели, гвоздезабиватели, степлеры",
						path: "/nailer"
					},
					pneumaticGrinders: {
						ruName: "Пневмошлифмашины",
						subcategoryPageRuHeading: "Пневмошлифмашины",
						path: "/pneumogrinder"
					}
				}
			},
			machines: {
				ruName: "Станки",
				subCategories: {
					woodworkingMachinery: {
						ruName: "Деревообрабатывающие станки",
						subcategoryPageRuHeading: "Деревообрабатывающие станки",
						path: "/woodworking"
					},
					metalworkingMachinery: {
						ruName: "Металлообрабатывающие станки",
						subcategoryPageRuHeading: "Металлообрабатывающие станки",
						path: "/metalworking"
					},
					tileCutterMachinery: {
						ruName: "Плиткорезные станки",
						subcategoryPageRuHeading: "Станки для резки плитки",
						path: "/tilecutter?tc_type[0]=tool&tc_type[operation]=union"
					},
					sharpeningMachines: {
						ruName: "Заточные станки (точила)",
						subcategoryPageRuHeading: "Заточные станки (точила)",
						path: "/benchgrinder"
					}
				}
			},
			buildingAndFinishingMaterials: {
				ruName: "Строительные и отделочные материалы",
				subCategories: {
					buildingMaterials: {
						ruName: "Общестроительные материалы",
						subcategoryPageRuHeading: "Общестроительные материалы",
						path: "/buildingmaterial"
					},
					plaster: {
						ruName: "Штукатурка",
						subcategoryPageRuHeading: "Штукатурка",
						path: "/plaster"
					},
					adhesiveMixtures: {
						ruName: "Клеевые смеси",
						subcategoryPageRuHeading: "Клеевые смеси",
						path: "/adhesivemix"
					},
					floorMixtures: {
						ruName: "Смеси для полов",
						subcategoryPageRuHeading: "Смеси для полов",
						path: "/floormix"
					},
					putty: {
						ruName: "Шпатлевка",
						subcategoryPageRuHeading: "Шпатлевка",
						path: "/putty"
					},
					primer: {
						ruName: "Грунтовка",
						subcategoryPageRuHeading: "Грунтовки",
						path: "/primer"
					},
					drywall: {
						ruName: "Гипсокартон",
						subcategoryPageRuHeading: "Гипсокартон",
						path: "/drywall"
					},
					wallPanels: {
						ruName: "Стеновые панели",
						subcategoryPageRuHeading: "Стеновые панели",
						path: "/wall_panels"
					},
					ceramicTile: {
						ruName: "Керамическая плитка, керамогранит",
						subcategoryPageRuHeading: "Плитка",
						path: "/tile?t_tile%5B0%5D=ceramic&t_tile%5B1%5D=granite&t_tile%5B2%5D=clinker&t_tile%5Boperation%5D=union"
					},
					decorativeStone: {
						ruName: "Декоративный камень и кирпич",
						subcategoryPageRuHeading: "Декоративный камень и кирпич",
						path: "/decorative_stone"
					},
					flexibleStone: {
						ruName: "Гибкий камень",
						subcategoryPageRuHeading: "Гибкий камень",
						path: "/decorative_stone?gibkij-kamen"
					},
					paintsAndEnamels: {
						ruName: "Краски и эмали",
						subcategoryPageRuHeading: "Краски и эмали",
						path: "/paints"
					},
					lacquer: {
						ruName: "Лаки, пропитки, антисептики",
						subcategoryPageRuHeading: "Лаки, пропитки, антисептики",
						path: "/lacquer"
					},
					roofingMaterials: {
						ruName: "Кровельные материалы",
						subcategoryPageRuHeading: "Кровельные материалы",
						path: "/roof"
					},
					bricks: {
						ruName: "Кирпич",
						subcategoryPageRuHeading: "Кирпич, строительные блоки",
						path: "/bricks"
					},
					cement: {
						ruName: "Цемент",
						subcategoryPageRuHeading: "Цемент",
						path: "/caementum"
					},
					pavingSlabs: {
						ruName: "Тротуарная плитка",
						subcategoryPageRuHeading: "Тротуарная плитка",
						path: "/pavers"
					},
					pipeMetalRolling: {
						ruName: "Трубный металлопрокат",
						subcategoryPageRuHeading: "Трубный металлопрокат",
						path: "/metal_pipes"
					},
					sheetMetalRolling: {
						ruName: "Листовой металлопрокат",
						subcategoryPageRuHeading: "Листовой металлопрокат",
						path: "/sheetmetal"
					},
					fittings: {
						ruName: "Арматура",
						subcategoryPageRuHeading: "Арматура",
						path: "/armatura"
					},
					constructionNets: {
						ruName: "Строительные сетки",
						subcategoryPageRuHeading: "Строительные сетки",
						path: "/rabitz"
					}
				}
			}
		}
	},
	houseAndGarden: {
		id: 5,
		ruName: "Дом и сад",
		categories: {
			bathroomAndToilet: {
				ruName: "Ванная комната и туалет",
				subCategories: {
					faucets: {
						ruName: "Смесители",
						subcategoryPageRuHeading: "",
						path: "/faucet"
					},
					bathtubs: {
						ruName: "Ванны",
						subcategoryPageRuHeading: "",
						path: "/bathtub"
					},
					waterHeaters: {
						ruName: "Водонагреватели",
						subcategoryPageRuHeading: "",
						path: "/waterheater"
					},
					towelWarmers: {
						ruName: "Полотенцесушители",
						subcategoryPageRuHeading: "",
						path: "/towelrail"
					},
					showerCabins: {
						ruName: "Душевые кабины",
						subcategoryPageRuHeading: "",
						path: "/showerbox"
					},
					pans: {
						ruName: "Унитазы",
						subcategoryPageRuHeading: "",
						path: "/wcpan"
					},
					washbasins: {
						ruName: "Умывальники",
						subcategoryPageRuHeading: "",
						path: "/washbasin"
					},
					pedestalForWashbasins: {
						ruName: "Пьедесталы для умывальников",
						subcategoryPageRuHeading: "",
						path: "/pedestal"
					},
					siphons: {
						ruName: "Сифоны",
						subcategoryPageRuHeading: "",
						path: "/siphon"
					},
					tileForBathrooms: {
						ruName: "Плитка для ванных комнат",
						subcategoryPageRuHeading: "",
						path: "/tile?t_appointment[0]=bathroom&t_appointment[operation]=union"
					},
					furnitureForBathrooms: {
						ruName: "Мебель для ванных комнат",
						subcategoryPageRuHeading: "",
						path: "/bath_furniture"
					},
					bidets: {
						ruName: "Биде",
						subcategoryPageRuHeading: "",
						path: "/bidet"
					},
					installationsForPansSinksBidets: {
						ruName: "Инсталляции для унитазов, раковин, биде и писсуаров",
						subcategoryPageRuHeading: "",
						path: "/installations"
					},
					flushingSystems: {
						ruName: "Клавиши и системы смыва",
						subcategoryPageRuHeading: "",
						path: "/flushing_system"
					},
					electronicBidetCovers: {
						ruName: "Электронные крышки-биде",
						subcategoryPageRuHeading: "",
						path: "/toilet_shower"
					},
					showerPanels: {
						ruName: "Душевые панели и гарнитуры",
						subcategoryPageRuHeading: "",
						path: "/shower"
					},
					showerTrays: {
						ruName: "Душевые поддоны",
						subcategoryPageRuHeading: "",
						path: "/shower_trays"
					},
					exhaustFans: {
						ruName: "Вытяжные вентиляторы",
						subcategoryPageRuHeading: "",
						path: "/exhaustfan?ef_useage[0]=bathroom&ef_useage[operation]=union"
					},
					accessPanels: {
						ruName: "Сантехнические ревизионные люки",
						subcategoryPageRuHeading: "",
						path: "/access_panel"
					},
					dryClosets: {
						ruName: "Биотуалеты",
						subcategoryPageRuHeading: "",
						path: "/biotoilet"
					},
					laundryBaskets: {
						ruName: "Корзины для белья",
						subcategoryPageRuHeading: "",
						path: "/toystorage?ts_const%5B0%5D=basket&ts_const%5Boperation%5D=union&ts_purpos%5B0%5D=underwear&ts_purpos%5Boperation%5D=union"
					}
				}
			},
			kitchen: {
				ruName: "Кухня",
				subCategories: {
					kitchenSinks: {
						ruName: "Мойки",
						path: "/kitchensink"
					},
					faucets: {
						ruName: "Смесители",
						subcategoryPageRuHeading: "",
						path: "/faucet"
					},
					ceramicTile: {
						ruName: "Керамическая плитка",
						subcategoryPageRuHeading: "",
						path: "/tile?t_appointment%5B0%5D=kitchen&t_appointment%5Boperation%5D=union"
					},
					foodWasteShredders: {
						ruName: "Измельчители пищевых отходов",
						subcategoryPageRuHeading: "",
						path: "/disposer"
					},

					filtersAndWaterTreatmentSystems: {
						ruName: "Фильтры и системы очистки воды",
						subcategoryPageRuHeading: "",
						path: "/waterfilter"
					},
					exhaustFans: {
						ruName: "Вытяжные вентиляторы",
						subcategoryPageRuHeading: "",
						path: "/exhaustfan?ef_useage%5B0%5D=bathroom&ef_useage%5Boperation%5D=union"
					}
				}
			},
			waterSupplyAndHeating: {
				ruName: "Водоснабжение, отопление",
				subCategories: {
					pumps: {
						ruName: "Насосы",
						subcategoryPageRuHeading: "",
						path: "/pump"
					},
					waterHeaters: {
						ruName: "Водонагреватели",
						subcategoryPageRuHeading: "",
						path: "/waterheater"
					},
					boilers: {
						ruName: "отопительные котлы",
						subcategoryPageRuHeading: "",
						path: "/boiler"
					},
					filtersAndWaterTreatmentSystems: {
						ruName: "Фильтры и системы очистки воды",
						subcategoryPageRuHeading: "",
						path: "/waterfilter"
					},
					radiators: {
						ruName: "Радиаторы отопления",
						subcategoryPageRuHeading: "",
						path: "/radiators"
					},
					fireplaces: {
						ruName: "Дровяные камины, печи-камины, порталы",
						subcategoryPageRuHeading: "",
						path: "/stove"
					},
					heaters: {
						ruName: "Обогреватели",
						subcategoryPageRuHeading: "",
						path: "/heater"
					},
					heatGuns: {
						ruName: "Тепловые пушки",
						subcategoryPageRuHeading: "",
						path: "/heat_gun"
					},
					electricFireplaces: {
						ruName: "электрокамины и биокамины",
						subcategoryPageRuHeading: "",
						path: "/electrofireplace"
					},
					waterAccumulators: {
						ruName: "Гидроаккумуляторы и расширительные баки",
						subcategoryPageRuHeading: "",
						path: "/hydroaccum"
					},
					motorPumps: {
						ruName: "Мотопомпы",
						subcategoryPageRuHeading: "",
						path: "/motopump"
					},
					pipesAndFittings: {
						ruName: "Трубы, фитинг",
						subcategoryPageRuHeading: "",
						path: "/tube_fitting"
					},
					waterAndGasPipes: {
						ruName: "Трубы водогазопроводные",
						subcategoryPageRuHeading: "",
						path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union"
					}
				}
			},
			furniture: {
				ruName: "Мебель для дома",
				subCategories: {
					officeArmchairsAndChairs: {
						ruName: "Офисные кресла и стулья",
						subcategoryPageRuHeading: "",
						path: "/office_chair?asgmt%5B0%5D=visitor&asgmt%5B1%5D=staff&asgmt%5B2%5D=boss&asgmt%5Boperation%5D=union"
					},
					gamingChairs: {
						ruName: "Геймерские кресла",
						subcategoryPageRuHeading: "",
						path: "/office_chair?asgmt%5B0%5D=game&asgmt%5Boperation%5D=union"
					},
					sofas: {
						ruName: "Диваны",
						subcategoryPageRuHeading: "",
						path: "/divan"
					},
					tables: {
						ruName: "Столы",
						subcategoryPageRuHeading: "",
						path: "/table"
					},
					chairsForKitchenAndBar: {
						ruName: "Стулья для кухни и бара",
						subcategoryPageRuHeading: "",
						path: "/chair"
					},
					armchairs: {
						ruName: "Кресла",
						subcategoryPageRuHeading: "",
						path: "/interior_chair"
					},
					beds: {
						ruName: "Кровати",
						subcategoryPageRuHeading: "",
						path: "/bed"
					},
					furnitureForBathrooms: {
						ruName: "Мебель ля ванных комнат",
						subcategoryPageRuHeading: "",
						path: "/bath_furniture"
					},
					cots: {
						ruName: "Детские кроватки",
						subcategoryPageRuHeading: "",
						path: "/babycotbed"
					},
					childrenTablesAndSchoolDesks: {
						ruName: "Детские столы и парты",
						subcategoryPageRuHeading: "",
						path: "/kidsdesk"
					},
					childrenDressers: {
						ruName: "Детские комоды",
						subcategoryPageRuHeading: "",
						path: "/babydresser"
					},
					boxesBasketsOrganizers: {
						ruName: "Ящики, корзины, органайзеры",
						subcategoryPageRuHeading: "",
						path: "/toystorage"
					},
					inflatableFurniture: {
						ruName: "Надувная мебель",
						subcategoryPageRuHeading: "",
						path: "/airbed"
					},
					framelessFurniture: {
						ruName: "Бескаркасная мебель",
						subcategoryPageRuHeading: "",
						path: "/beanbag"
					},
					bedBases: {
						ruName: "Основания для кроватей",
						subcategoryPageRuHeading: "",
						path: "/orthobase"
					},
					massagersAndMassageChairs: {
						ruName: "Массажеры и массажные кресла",
						subcategoryPageRuHeading: "",
						path: "/massagechair"
					}
				}
			},
			bedroom: {
				ruName: "Товары для спальни и домашний текстиль",
				subCategories: {
					mattresses: {
						ruName: "Матрасы",
						subcategoryPageRuHeading: "",
						path: "/mattress"
					},
					orthopedicPillows: {
						ruName: "Ортопедические подушки",
						subcategoryPageRuHeading: "",
						path: "/pillow"
					},
					classicPillows: {
						ruName: "Классические подушки для сна",
						subcategoryPageRuHeading: "",
						path: "/pillows?pil_type%5B0%5D=sleep&pil_type%5Boperation%5D=union&order=price:asc"
					},
					blankets: {
						ruName: "Одеяла",
						subcategoryPageRuHeading: "",
						path: "/pillows?pil_type%5B0%5D=blanket&pil_type%5Boperation%5D=union"
					},
					plaids: {
						ruName: "Пледы, покрывала",
						subcategoryPageRuHeading: "",
						path: "h/plaid"
					},
					bedlinen: {
						ruName: "Постельное белье",
						subcategoryPageRuHeading: "",
						path: "/bedlinen"
					},
					mattressPads: {
						ruName: "Наматрасники",
						subcategoryPageRuHeading: "",
						path: "/mattresspad"
					},
					electricLinen: {
						ruName: "Электрогрелки, электроодеяла, электропростыни",
						subcategoryPageRuHeading: "",
						path: "/mobile_heater"
					},
					maternityPillows: {
						ruName: "Подушки для беременных",
						subcategoryPageRuHeading: "",
						path: "/pillows?pil_type%5B0%5D=forpregnantwom&pil_type%5Boperation%5D=union"
					},
					decorativePillows: {
						ruName: "Декоративные подушки",
						subcategoryPageRuHeading: "",
						path: "/pillows?pil_type%5B0%5D=decor&pil_type%5Boperation%5D=union"
					}
				}
			},
			gardenToolsAndMachines: {
				ruName: "Садовая техника и инструменты",
				subCategories: {
					miniTractors: {
						ruName: "Мини-тракторы",
						subcategoryPageRuHeading: "",
						path: "/minitractor"
					},
					motorBlocks: {
						ruName: "Мотоблоки и мультикультиваторы",
						subcategoryPageRuHeading: "",
						path: "/motoblock"
					},
					attachmentsForGardenEquipment: {
						ruName: "Навесное оборудование для садовой техники",
						subcategoryPageRuHeading: "",
						path: "/attachmentgarden"
					},
					engines: {
						ruName: "Двигатели",
						subcategoryPageRuHeading: "",
						path: "/engine"
					},
					trimmers: {
						ruName: "Триммеры",
						subcategoryPageRuHeading: "",
						path: "/trimmers"
					},
					mowers: {
						ruName: "Газонокосилки",
						subcategoryPageRuHeading: "",
						path: "/mowers"
					},
					toolsAccumulators: {
						ruName: "Аккумуляторы и зарядные устройства для инструмента",
						subcategoryPageRuHeading: "",
						path: "/tools_accum"
					},
					aerators: {
						ruName: "Аэраторы, скарификаторы",
						subcategoryPageRuHeading: "",
						path: "/mowers?type_mowing%5B0%5D=scarifier&type_mowing%5B1%5D=aerator&type_mowing%5B2%5D=scarifieraera&type_mowing%5Boperation%5D=union"
					},
					chainSaws: {
						ruName: "Цепные пилы",
						subcategoryPageRuHeading: "",
						path: "/chainsaw"
					},
					householdVacuumCleaners: {
						ruName: "Хозяйственные пылесосы",
						subcategoryPageRuHeading: "",
						path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union"
					},
					logSplitters: {
						ruName: "Дровоколы",
						subcategoryPageRuHeading: "",
						path: "/logsplitter"
					},
					pressureWashers: {
						ruName: "Мойки высокого давления",
						subcategoryPageRuHeading: "",
						path: "/washers"
					},
					hedgeTrimmers: {
						ruName: "Кусторезы и высоторезы",
						subcategoryPageRuHeading: "",
						path: "/hedgetrimmers"
					},
					gardenShredders: {
						ruName: "Садовые измельчители",
						subcategoryPageRuHeading: "",
						path: "/gardenshredder"
					},
					snowBlowers: {
						ruName: "Снегоуборщики",
						subcategoryPageRuHeading: "",
						path: "/snowblower"
					},
					leafBlowers: {
						ruName: "Воздуходувки",
						subcategoryPageRuHeading: "",
						path: "/leafblower"
					},
					gardenTools: {
						ruName: "Садовый инструмент",
						subcategoryPageRuHeading: "",
						path: "/gardentool"
					},
					wateringHoses: {
						ruName: "Поливочные шланги",
						subcategoryPageRuHeading: "",
						path: "/garden_hose"
					},
					automaticWateringSystems: {
						ruName: "Системы автоматического полива, распылители",
						subcategoryPageRuHeading: "",
						path: "/watering_system"
					},
					gardenBarrows: {
						ruName: "Садовые тачки",
						subcategoryPageRuHeading: "",
						path: "/barrow"
					},
					stairsAndLadders: {
						ruName: "Лестницы и стремянки",
						subcategoryPageRuHeading: "",
						path: "/stairandladder"
					}
				}
			},
			dacha: {
				ruName: "Отдых на даче",
				subCategories: {
					baths: {
						ruName: "Бани, купели",
						subcategoryPageRuHeading: "",
						path: "/bath"
					},
					gazeboses: {
						ruName: "Беседки",
						subcategoryPageRuHeading: "",
						path: "/garden_house"
					},
					pools: {
						ruName: "Бассейны",
						subcategoryPageRuHeading: "",
						path: "/pool"
					},
					grills: {
						ruName: "Мангалы, грили, барбекю",
						subcategoryPageRuHeading: "",
						path: "/grill"
					},
					bbqFacilities: {
						ruName: "Принадлежности для барбекю, грилей, мангалов",
						subcategoryPageRuHeading: "",
						path: "/bbq_accessories"
					},
					bathStoves: {
						ruName: "Банные печи",
						subcategoryPageRuHeading: "",
						path: "/bathstove"
					},
					childrenStreetComplexesAndHills: {
						ruName: "Детские уличные комплексы и горки",
						subcategoryPageRuHeading: "",
						path: "/kidwallbars?kwb_type[0]=outdoor&kwb_type[operation]=union"
					},
					gardenSwing: {
						ruName: "Садовые качели",
						subcategoryPageRuHeading: "",
						path: "/gardenswing"
					},
					trampolines: {
						ruName: "Батуты",
						subcategoryPageRuHeading: "",
						path: "/trampoline"
					},
					gardenFurniture: {
						ruName: "Садовая мебель",
						subcategoryPageRuHeading: "",
						path: "/gardenfurniture"
					},
					hammocks: {
						ruName: "Гамаки",
						subcategoryPageRuHeading: "",
						path: "/hammock"
					},
					tents: {
						ruName: "Шатры, тенты",
						subcategoryPageRuHeading: "",
						path: "/canopy_tents"
					},
					loungers: {
						ruName: "Шезлонги",
						subcategoryPageRuHeading: "",
						path: "/lounger"
					},
					streetUmbrellas: {
						ruName: "Зонты садовые, пляжные",
						subcategoryPageRuHeading: "",
						path: "/street_umbrella"
					}
				}
			},
			siteArrangement: {
				ruName: "Обустройство участка",
				subCategories: {
					houses: {
						ruName: "Дома, коттеджи",
						subcategoryPageRuHeading: "",
						path: "/house"
					},
					gazeboses: {
						ruName: "Беседки",
						subcategoryPageRuHeading: "",
						path: "/garden_house"
					},
					gardenCabins: {
						ruName: "Дачные бытовки и хозблоки",
						subcategoryPageRuHeading: "",
						path: "/garden_cabin"
					},
					streetLightning: {
						ruName: "Уличное освещение",
						subcategoryPageRuHeading: "",
						path: "/luster?lu_arrangement%5B0%5D=street&lu_arrangement%5Boperation%5D=union"
					},
					streetClothesDryers: {
						ruName: "Уличные сушки для белья",
						subcategoryPageRuHeading: "",
						path: "/linendryer?dr_mounting[0]=ground&dr_mounting[operation]=union"
					},
					insectKillers: {
						ruName: "Уничтожители насекомых",
						subcategoryPageRuHeading: "",
						path: "/insect_killer"
					},
					summerShowers: {
						ruName: "Летние души",
						subcategoryPageRuHeading: "",
						path: "/summer_shower"
					},
					countryToilets: {
						ruName: "Дачные туалеты",
						subcategoryPageRuHeading: "",
						path: "/outdoor_toilet"
					},
					dryClosets: {
						ruName: "Биотуалеты",
						subcategoryPageRuHeading: "",
						path: "/biotoilet"
					},
					meansForDryClosets: {
						ruName: "Средства для биотуалетов, выгребных ям",
						subcategoryPageRuHeading: "",
						path: "/wc_liquid"
					},
					brickTile: {
						ruName: "Клинкерная плитка",
						subcategoryPageRuHeading: "",
						path: "/tile?t_tile%5B0%5D=clinker&t_tile%5Boperation%5D=union"
					},
					pavingSlabs: {
						ruName: "Тротуарная плитка",
						subcategoryPageRuHeading: "",
						path: "/pavers"
					},
					plantersAndPotsForPlants: {
						ruName: "Кашпо, горшки для растений",
						subcategoryPageRuHeading: "",
						path: "/flowerpot"
					},
					rabitz: {
						ruName: "Сетка-рабица",
						subcategoryPageRuHeading: "",
						path: "/rabitz?mfr[0]=setkarabitza"
					}
				}
			},
			decorAndInterior: {
				ruName: "Декор и интерьер",
				subCategories: {
					interiorClocks: {
						ruName: "Интерьерные часы",
						subcategoryPageRuHeading: "",
						path: "/interior_clock"
					},
					nightLights: {
						ruName: "Ночники",
						subcategoryPageRuHeading: "",
						path: "/luster?lu_type%5B0%5D=nightlight&lu_type%5Boperation%5D=union"
					},
					floorLamps: {
						ruName: "Торшеры",
						subcategoryPageRuHeading: "",
						path: "/luster?lu_type%5B0%5D=floorlamp&lu_type%5Boperation%5D=union"
					},
					meteoStations: {
						ruName: "Метеостанции",
						subcategoryPageRuHeading: "",
						path: "/meteostations"
					},
					electricFireplaces: {
						ruName: "Электрокамины и биокамины",
						subcategoryPageRuHeading: "",
						path: "/electrofireplace"
					},
					decorativePillows: {
						ruName: "Декоративные подушки",
						subcategoryPageRuHeading: "",
						path: "/pillows?pil_type%5B0%5D=decor&pil_type%5Boperation%5D=union"
					},
					houseplants: {
						ruName: "Комнатные растения, флорариумы",
						subcategoryPageRuHeading: "",
						path: "/houseplant"
					}
				}
			},
			lightningAndPowerSupply: {
				ruName: "Освещение и электропитание",
				subCategories: {
					chandeliersAndLamps: {
						ruName: "Люстры и светильники",
						subcategoryPageRuHeading: "",
						path: "/luster"
					},
					tableLamps: {
						ruName: "Настольные лампы",
						subcategoryPageRuHeading: "",
						path: "/luster?lu_type%5B0%5D=light&lu_type%5Boperation%5D=union&lu_arrangement%5B0%5D=table&lu_arrangement%5Boperation%5D=union"
					},
					floorLamps: {
						ruName: "Торшеры",
						subcategoryPageRuHeading: "",
						path: "/luster?lu_type%5B0%5D=floorlamp&lu_type%5Boperation%5D=union"
					},
					nightLights: {
						ruName: "Ночники",
						subcategoryPageRuHeading: "",
						path: "/luster?lu_type%5B0%5D=nightlight&lu_type%5Boperation%5D=union"
					},
					streetLightning: {
						ruName: "Уличное освещение",
						subcategoryPageRuHeading: "",
						path: "/luster?lu_arrangement%5B0%5D=street&lu_arrangement%5Boperation%5D=union"
					},
					bulbs: {
						ruName: "Лампочки",
						subcategoryPageRuHeading: "",
						path: "/lightbulb"
					},
					socketsAndSwitches: {
						ruName: "Розетки, выключатели",
						subcategoryPageRuHeading: "",
						path: "/wall_socket"
					},
					stabilizersAndSurgeProtectors: {
						ruName: "Стабилизаторы напряжения и сетевые фильтры",
						subcategoryPageRuHeading: "",
						path: "/voltageregulator?voltage_type[0]=stabilizer&voltage_type[operation]=union"
					},
					generators: {
						ruName: "Генераторы",
						subcategoryPageRuHeading: "",
						path: "/powerstations"
					}
				}
			},
			smartHouseAndSecurity: {
				ruName: "Умный дом и безопасность",
				subCategories: {
					smartHome: {
						ruName: "Умный дом",
						subcategoryPageRuHeading: "",
						path: "/smart_home"
					},
					smartThermostats: {
						ruName: "Умные терморегуляторы",
						subcategoryPageRuHeading: "",
						path: "/thermostat?smarthome=1"
					},
					smartBulbs: {
						ruName: "Умные лампочки",
						subcategoryPageRuHeading: "",
						path: "/lightbulb?lib_smartlight=1"
					},
					smartSockets: {
						ruName: "Умные розетки",
						subcategoryPageRuHeading: "",
						path: "/wall_socket?wallsoc_smart=1"
					},
					ipCameras: {
						ruName: "IP-камеры",
						subcategoryPageRuHeading: "",
						path: "/ipcamera"
					},
					videoDoorPhones: {
						ruName: "Видеодомофоны",
						subcategoryPageRuHeading: "",
						path: "/videodoorphone"
					},
					CCTV: {
						ruName: "Камеры CCTV",
						subcategoryPageRuHeading: "",
						path: "/cctvcamera"
					},
					DVRs: {
						ruName: "Видеорегистраторы",
						subcategoryPageRuHeading: "",
						path: "/dvr"
					},
					cameraTraps: {
						ruName: "Фотоловушки",
						subcategoryPageRuHeading: "",
						path: "/camera_traps"
					},
					metalDoors: {
						ruName: "Входные двери",
						subcategoryPageRuHeading: "",
						path: "/steeldoor"
					},
					extinguishers: {
						ruName: "Огнетушители",
						subcategoryPageRuHeading: "",
						path: "/extinguisher"
					}
				}
			},
			clothingCare: {
				ruName: "Уход за одеждой, стирка",
				subCategories: {
					linenDryers: {
						ruName: "Сушилки для белья",
						subcategoryPageRuHeading: "",
						path: "/linendryer"
					},
					ironingBoards: {
						ruName: "Гладильные доски",
						subcategoryPageRuHeading: "",
						path: "/ironingboard"
					},
					laundryAndCareProducts: {
						ruName: "Средства для стирки и ухода за бельем",
						subcategoryPageRuHeading: "",
						path: "/washingpowder"
					},
					dishwasherTools: {
						ruName: "Средства для посудомоечных машин",
						subcategoryPageRuHeading: "",
						path: "/dishwashertablet"
					}
				}
			},
			dishes: {
				ruName: "Посуда и продукты питания",
				subCategories: {
					pans: {
						ruName: "Сковороды",
						subcategoryPageRuHeading: "",
						path: "/pan"
					},
					stewpans: {
						ruName: "Сотейники",
						subcategoryPageRuHeading: "",
						path: "/pan?p_type[0]=saucepan&p_type[operation]=union"
					},
					saucepans: {
						ruName: "Кастрюли",
						subcategoryPageRuHeading: "",
						path: "/saucepan"
					},
					lids: {
						ruName: "Крышки для посуды",
						subcategoryPageRuHeading: "",
						path: "/lids"
					},
					kettles: {
						ruName: "Чайники",
						subcategoryPageRuHeading: "",
						path: "/kettles"
					},
					teapots: {
						ruName: "Заварочные чайники, кофеварки, френч-прессы",
						subcategoryPageRuHeading: "",
						path: "/teapot"
					},
					dishesSets: {
						ruName: "Сервизы и наборы столовой посуды",
						subcategoryPageRuHeading: "",
						path: "/dishset"
					},
					cutlery: {
						ruName: "Столовые приборы",
						subcategoryPageRuHeading: "",
						path: "/cutlery"
					},
					kitchenKnifesAndScissors: {
						ruName: "Кухонные ножи и ножницы",
						subcategoryPageRuHeading: "",
						path: "/kitchen_knife"
					},
					bakingDishesAndBakingSheets: {
						ruName: "Формы для выпечки, противни",
						subcategoryPageRuHeading: "",
						path: "/breadpan"
					},
					barAccessories: {
						ruName: "Аксессуары для бара",
						subcategoryPageRuHeading: "",
						path: "/bar_accessories"
					},
					thermosesAndThermomugs: {
						ruName: "Термосы, термокружки",
						subcategoryPageRuHeading: "",
						path: "/thermosbottle"
					},
					coffee: {
						ruName: "Кофе",
						subcategoryPageRuHeading: "",
						path: "/coffeejava"
					}
				}
			},
			celebrations: {
				ruName: "Праздники",
				subCategories: {
					flowersBouquets: {
						ruName: "Цветы, букеты",
						subcategoryPageRuHeading: "",
						path: "/flowersbouquets"
					},
					stuffedToys: {
						ruName: "Мягкие игрушки",
						subcategoryPageRuHeading: "",
						path: "/stuffedtoys"
					},
					xmasTrees: {
						ruName: "Елки",
						subcategoryPageRuHeading: "",
						path: "/tree"
					},
					xmasLights: {
						ruName: "Электрические гирлянды",
						subcategoryPageRuHeading: "",
						path: "/xmaslights"
					},
					xmaslightsTreesAndFigures: {
						ruName: "Световые деревья, фигуры",
						subcategoryPageRuHeading: "",
						path: "/xmaslights?xl_type[0]=2d&xl_type[1]=tree&xl_type[2]=3d&xl_type[operation]=union"
					},
					xmasToysAndDecorations: {
						ruName: "Елочные игрушки, украшения",
						subcategoryPageRuHeading: "",
						path: "/christmasdecor"
					}
				}
			},
			petSupplies: {
				ruName: "Зоотовары",
				subCategories: {
					dogFood: {
						ruName: "Корма для собак",
						subcategoryPageRuHeading: "",
						path: "/foodfordog"
					},
					catFood: {
						ruName: "Корма для кошек",
						subcategoryPageRuHeading: "",
						path: "/catfood"
					},
					animalPlates: {
						ruName: "Миски, поилки, кормушки для животных",
						subcategoryPageRuHeading: "",
						path: "/animal_plate"
					},
					toiletsFillers: {
						ruName: "Наполнители для туалетов",
						subcategoryPageRuHeading: "",
						path: "/catlitter?catlit_typ%5B0%5D=type6&catlit_typ%5Boperation%5D=union"
					},
					toiletsForAnimals: {
						ruName: "Туалеты",
						subcategoryPageRuHeading: "",
						path: "/catlitter?catlit_typ%5B0%5D=type1&catlit_typ%5B1%5D=type2&catlit_typ%5Boperation%5D=union"
					},
					bagsForAnimals: {
						ruName: "Сумки, переноски для животных",
						subcategoryPageRuHeading: "",
						path: "/pet_carrier"
					},
					loungersForAnimals: {
						ruName: "Лежанки, домики, когтеточки для кошек и собак",
						subcategoryPageRuHeading: "",
						path: "/pet_house"
					}
				}
			},
			plantGrowing: {
				ruName: "Растениеводство",
				subCategories: {
					gardenTools: {
						ruName: "Садовый инструмент",
						subcategoryPageRuHeading: "",
						path: "/gardentool"
					},
					greenhousesAndHotbeds: {
						ruName: "Теплицы и парники",
						subcategoryPageRuHeading: "",
						path: "/greenhouse"
					},
					polycarbonateForGreenhouses: {
						ruName: "Поликарбонат для теплиц",
						subcategoryPageRuHeading: "",
						path: "/polycarbonate"
					},
					coveringMaterials: {
						ruName: "Укрывной материал",
						subcategoryPageRuHeading: "",
						path: "/coveringmaterial"
					},
					wateringHoses: {
						ruName: "Поливочные шланги",
						subcategoryPageRuHeading: "",
						path: "/garden_hose"
					},
					automaticWateringSystems: {
						ruName: "Системы автоматического полива, распылители",
						subcategoryPageRuHeading: "",
						path: "/watering_system"
					},
					houseplants: {
						ruName: "Комнатные растения, флорариумы",
						subcategoryPageRuHeading: "",
						path: "/houseplant"
					},
					plantersAndPotsForPlants: {
						ruName: "Кашпо, горшки для растений",
						subcategoryPageRuHeading: "",
						path: "/flowerpot"
					},
					grassSeedsAndLawn: {
						ruName: "Семена трав, газон",
						subcategoryPageRuHeading: "",
						path: "/lawn"
					},
					soilForPlants: {
						ruName: "Грунты для растений",
						subcategoryPageRuHeading: "",
						path: "/soilforplants"
					},
					fertilizers: {
						ruName: "Удобрения",
						subcategoryPageRuHeading: "",
						path: "/fertilizer"
					},
					saplingsOfFruitTreesAndBushes: {
						ruName: "Саженцы плодовых деревьев и кустарников",
						subcategoryPageRuHeading: "",
						path: "/shrubtree?fs_vid%5B0%5D=plod&fs_vid%5Boperation%5D=union"
					},
					saplingsOfDecorativeBushes: {
						ruName: "Саженцы декоративных кустарников",
						subcategoryPageRuHeading: "",
						path: "/shrubtree?fs_type%5B0%5D=shrub&fs_type%5Boperation%5D=union&fs_vid%5B0%5D=dekor&fs_vid%5Boperation%5D=union"
					},
					saplingsOfConiferousBushes: {
						ruName: "Саженцы хвойных растений",
						subcategoryPageRuHeading: "",
						path: "/shrubtree?fs_appearance%5B0%5D=coniferous&fs_appearance%5Boperation%5D=union"
					},
					flowerSeeds: {
						ruName: "Семена цветов",
						subcategoryPageRuHeading: "",
						path: "/flowersseed?vs_reproduction%5B0%5D=seed&vs_reproduction%5Boperation%5D=union"
					},
					flowerBulbs: {
						ruName: "Луковицы цветов",
						subcategoryPageRuHeading: "",
						path: "/flowersseed?vs_reproduction%5B0%5D=bulbs&vs_reproduction%5Boperation%5D=union"
					},
					seedsOfVegetablesHerbsAndBerries: {
						ruName: "Семена овощей, зелени и ягод",
						subcategoryPageRuHeading: "",
						path: "/vegetableseed"
					}
				}
			}
		}
	},
	carsAndMotorcycles: {
		id: 6,
		ruName: "Авто и мото",
		categories: {
			sparePartsAndTechnicalFluids: {
				ruName: "Запчасти и технические жидкости",
				subCategories: {
					tires: {
						ruName: "Шины",
						subcategoryPageRuHeading: "",
						path: "/tires"
					},
					motorOil: {
						ruName: "Моторные масла",
						subcategoryPageRuHeading: "",
						path: "/motor_oil"
					},
					carBatteries: {
						ruName: "Аккумуляторы",
						subcategoryPageRuHeading: "",
						path: "/carbattery"
					},
					wheels: {
						ruName: "Диски",
						subcategoryPageRuHeading: "",
						path: "/wheel"
					},
					gearOil: {
						ruName: "Трансмиссионные масла",
						subcategoryPageRuHeading: "",
						path: "/gearoil"
					},
					carBulbs: {
						ruName: "Лампы",
						subcategoryPageRuHeading: "",
						path: "/autolamps"
					},
					coolants: {
						ruName: "Охлаждающие жидкости",
						subcategoryPageRuHeading: "",
						path: "/antifreeze"
					},
					additives: {
						ruName: "Присадки",
						subcategoryPageRuHeading: "",
						path: "/additive4fuel"
					},
					glassWasherFluids: {
						ruName: "Стеклоомывающие жидкости",
						subcategoryPageRuHeading: "",
						path: "/washerfluid"
					},
					brakeFluids: {
						ruName: "Тормозные жидкости",
						subcategoryPageRuHeading: "",
						path: "/brakefluid"
					},
					xenon: {
						ruName: "Ксенон",
						subcategoryPageRuHeading: "",
						path: "/xenon"
					},
					motorBatteries: {
						ruName: "Мотоциклетные аккумуляторы",
						subcategoryPageRuHeading: "",
						path: "/motobatteries"
					},
					enginePreheaters: {
						ruName: "Предпусковые подогреватели двигателя и топливной системы",
						subcategoryPageRuHeading: "",
						path: "/dieselfuelheater"
					}
				}
			},
			carElectronics: {
				ruName: "Автоэлектроника",
				subCategories: {
					DVRs: {
						ruName: "Видеорегистраторы",
						subcategoryPageRuHeading: "",
						path: "/videoregistrator"
					},
					radioAndHeadSystems: {
						ruName: "Магнитолы и головные системы",
						subcategoryPageRuHeading: "",
						path: "/caraudio"
					},
					carSpeakers: {
						ruName: "Акустика",
						subcategoryPageRuHeading: "",
						path: "/carspeakers"
					},
					radarDetectors: {
						ruName: "Радар-детекторы",
						subcategoryPageRuHeading: "",
						path: "/radar"
					},
					gpsNavigators: {
						ruName: "GPS-навигаторы",
						subcategoryPageRuHeading: "",
						path: "/gps"
					},
					carAlarm: {
						ruName: "Сигнализация",
						subcategoryPageRuHeading: "",
						path: "/caralarm"
					},
					carAmplifiers: {
						ruName: "Усилители",
						subcategoryPageRuHeading: "",
						path: "/caramps"
					},
					cbRadioStations: {
						ruName: "Радиостанции CB",
						subcategoryPageRuHeading: "",
						path: "/car_radio"
					},
					speakerphones: {
						ruName: "Громкая связь",
						subcategoryPageRuHeading: "",
						path: "/carkit"
					},
					fmModulators: {
						ruName: "FM-модуляторы",
						subcategoryPageRuHeading: "",
						path: "/fmmodulators"
					},
					carInverters: {
						ruName: "Автомобильные инверторы",
						subcategoryPageRuHeading: "",
						path: "/car_inverter"
					},
					parkingRadar: {
						ruName: "Парковочные радары",
						subcategoryPageRuHeading: "",
						path: "/parkingradar"
					},
					gpsTrackers: {
						ruName: "GPS-трекеры",
						subcategoryPageRuHeading: "",
						path: "/gps_tracker"
					},
					carAntennas: {
						ruName: "Автомобильные антенны",
						subcategoryPageRuHeading: "",
						path: "/antenforradio"
					},
					carVideoPlayers: {
						ruName: "Автомобильные видеоплееры и DVD",
						subcategoryPageRuHeading: "",
						path: "/portabletvdvd"
					}
				}
			},
			repairAndWashingEquipment: {
				ruName: "Оборудование для ремонта и мойки",
				subCategories: {
					welders: {
						ruName: "Сварочные аппараты",
						subcategoryPageRuHeading: "",
						path: "/weldinginverter"
					},
					toolKits: {
						ruName: "Наборы инструментов",
						subcategoryPageRuHeading: "",
						path: "/tool_kits"
					},
					torqueWrenchesAndScrewdrivers: {
						ruName: "Динамометрические ключи и отвертки",
						subcategoryPageRuHeading: "",
						path: "/torque_wrenches"
					},
					multimeters: {
						ruName: "Мультиметры, токовые клещи, индикаторные отвертки",
						subcategoryPageRuHeading: "",
						path: "/multimeter"
					},
					compressors: {
						ruName: "Компрессоры",
						subcategoryPageRuHeading: "",
						path: "/compressor"
					},
					pressureWashers: {
						ruName: "Мойки высокого давления",
						subcategoryPageRuHeading: "",
						path: "/washers"
					},
					pneumaticSprayGuns: {
						ruName: "Пневматические краскопульты",
						subcategoryPageRuHeading: "",
						path: "/spraygun"
					},
					carjacks: {
						ruName: "Домкраты",
						subcategoryPageRuHeading: "",
						path: "/carjack"
					},
					weldingMasks: {
						ruName: "Сварочные маски",
						subcategoryPageRuHeading: "",
						path: "/weldingmask"
					},
					electricSprayGuns: {
						ruName: "Электрические краскопульты",
						subcategoryPageRuHeading: "",
						path: "/electricspraygun"
					},
					pneumaticWrenches: {
						ruName: "Пневматические гайковерты",
						subcategoryPageRuHeading: "",
						path: "/wrench"
					},
					grinders: {
						ruName: "Пневматические шлифмашины",
						subcategoryPageRuHeading: "",
						path: "/pneumogrinder"
					},
					carLifts: {
						ruName: "Подъемники",
						subcategoryPageRuHeading: "",
						path: "/carlift"
					}
				}
			},
			carAccessories: {
				ruName: "Аксессуары",
				subCategories: {
					toolKits: {
						ruName: "Наборы инструментов",
						subcategoryPageRuHeading: "",
						path: "/tool_kits"
					},
					startChargers: {
						ruName: "Пускозарядные устройства",
						subcategoryPageRuHeading: "",
						path: "/start_charge"
					},
					carRefrigerators: {
						ruName: "Автохолодильники, термобоксы, термосумки",
						subcategoryPageRuHeading: "",
						path: "/arrefrigerator"
					},
					carCompressors: {
						ruName: "Автомобильные компрессоры",
						subcategoryPageRuHeading: "",
						path: "/compressor_auto"
					},
					carHolders: {
						ruName: "Держатели для телефонов",
						subcategoryPageRuHeading: "",
						path: "/carholder"
					},
					breathalyzers: {
						ruName: "Алкотестеры",
						subcategoryPageRuHeading: "",
						path: "/breathalyzer"
					},
					bicycleRacks: {
						ruName: "Велобагажники",
						subcategoryPageRuHeading: "",
						path: "/bicyclerack"
					},
					carVacuumCleaners: {
						ruName: "Автомобильные пылесосы",
						subcategoryPageRuHeading: "",
						path: "/car_vacuum_clean"
					},
					carRoofRacks: {
						ruName: "Багажники на крышу",
						subcategoryPageRuHeading: "",
						path: "/car_racks"
					},
					electricChargingStations: {
						ruName: "Электрические зарядные станции",
						subcategoryPageRuHeading: "",
						path: "/charging_station"
					}
				}
			},
			autoAndMototechnics: {
				ruName: "Авто и мототехника",
				subCategories: {
					cars: {
						ruName: "Легковые автомобили",
						subcategoryPageRuHeading: "",
						path: "/car"
					},
					miniTractors: {
						ruName: "Тракторы",
						subcategoryPageRuHeading: "",
						path: "/minitractor"
					},
					motorcycles: {
						ruName: "Мотоциклы",
						subcategoryPageRuHeading: "",
						path: "/motorcycle"
					},
					electricScooters: {
						ruName: "Электроскутеры",
						subcategoryPageRuHeading: "",
						path: "/electric_scooter?ks_type%5B0%5D=scooter&ks_type%5Boperation%5D=union"
					},
					scooters: {
						ruName: "Скутеры и мопеды",
						subcategoryPageRuHeading: "",
						path: "/scooter"
					},
					ATVs: {
						ruName: "Квадроциклы",
						subcategoryPageRuHeading: "",
						path: "/quad"
					},
					motorHelmets: {
						ruName: "Мотошлемы",
						subcategoryPageRuHeading: "",
						path: "/motohelmet"
					},
					motorBatteries: {
						ruName: "Мотоциклетные аккумуляторы",
						subcategoryPageRuHeading: "",
						path: "/motobatteries"
					},
					motorcycleTires: {
						ruName: "Мотоциклетные шины",
						subcategoryPageRuHeading: "",
						path: "/moto_tires"
					}
				}
			}
		}
	},
	beautyAndSport: {
		id: 7,
		ruName: "Красота и спорт",
		categories: {
			bicycleAndAccessories: {
				ruName: "Велосипеды и аксессуары",
				subCategories: {
					bikes: {
						ruName: "Велосипеды",
						subcategoryPageRuHeading: "",
						path: "/bike"
					},
					childrenBicycles: {
						ruName: "Детские велосипеды",
						subcategoryPageRuHeading: "",
						path: "/kidsbike"
					},
					bicycleTires: {
						ruName: "Велопокрышки, велокамеры",
						subcategoryPageRuHeading: "",
						path: "/bicycle_tires"
					},
					bicycleHelmets: {
						ruName: "Велошлемы",
						subcategoryPageRuHeading: "",
						path: "/bikehelmet?bh_sport%5B0%5D=type1&bh_sport%5Boperation%5D=union"
					},
					bikeComputers: {
						ruName: "Велокомпьютеры",
						subcategoryPageRuHeading: "",
						path: "/bikecomp"
					},
					bikeLocks: {
						ruName: "Велозамки",
						subcategoryPageRuHeading: "",
						path: "/bikelock"
					},
					babyBikeSeats: {
						ruName: "Детские велокресла",
						subcategoryPageRuHeading: "",
						path: "/bikeseat"
					},
					bicycleRacks: {
						ruName: "Велобагажники",
						subcategoryPageRuHeading: "",
						path: "/bicyclerack"
					},
					childrenTrailers: {
						ruName: "Детские велоприцепы",
						subcategoryPageRuHeading: "",
						path: "/pram?pramconstruct%5B0%5D=trailer&pramconstruct%5Boperation%5D=union"
					},
					actionCameras: {
						ruName: "Экшен-камеры",
						subcategoryPageRuHeading: "",
						path: "/actioncamera"
					},
					actionCamerasAccessories: {
						ruName: "Аксессуары и крепления для экшен-камер",
						subcategoryPageRuHeading: "",
						path: "/actioncamera_acs"
					}
				}
			},
			rollerSkatesSkateboards: {
				ruName: "Роликовые коньки, скейтборды, самокаты",
				subCategories: {
					rollerSkates: {
						ruName: "Роликовые коньки",
						subcategoryPageRuHeading: "",
						path: "/rollerskates"
					},
					skateboards: {
						ruName: "Скейтборды",
						subcategoryPageRuHeading: "",
						path: "/skateboard"
					},
					kickScooters: {
						ruName: "Самокаты",
						subcategoryPageRuHeading: "",
						path: "/kickscooter"
					},
					sportsProtection: {
						ruName: "Спортивная защита",
						subcategoryPageRuHeading: "",
						path: "https://catalog.onliner.by/sportsprotection"
					},
					actionCameras: {
						ruName: "Экшен-камеры",
						subcategoryPageRuHeading: "",
						path: "/actioncamera"
					},
					actionCameraAccessories: {
						ruName: "Аксессуары и крепления для экшен-камер",
						subcategoryPageRuHeading: "",
						path: "/actioncamera_acs"
					}
				}
			},
			electricTransport: {
				ruName: "Роликовые коньки, скейтборды, самокаты",
				subCategories: {
					electricScooters: {
						ruName: "Электросамокаты и электроскутеры",
						subcategoryPageRuHeading: "",
						path: "/electric_scooter"
					},
					gyrocycles: {
						ruName: "Гироциклы",
						subcategoryPageRuHeading: "",
						path: "/segway"
					},
					electricBicycles: {
						ruName: "Электровелосипеды",
						subcategoryPageRuHeading: "",
						path: "/electrobike"
					}
				}
			},
			watchBagsAccessories: {
				ruName: "Часы, сумки и прочие аксессуары",
				subCategories: {
					watches: {
						ruName: "Наручные часы",
						subcategoryPageRuHeading: "",
						path: "/watch"
					},
					smartWatches: {
						ruName: "Умные часы и фитнес-браслеты",
						subcategoryPageRuHeading: "",
						path: "/smartwatch"
					},
					backpacks: {
						ruName: "Рюкзаки",
						subcategoryPageRuHeading: "",
						path: "/backpack"
					},
					suitcases: {
						ruName: "Чемоданы и дорожные сумки",
						subcategoryPageRuHeading: "",
						path: "/suitcase"
					},
					wallets: {
						ruName: "Кошельки",
						subcategoryPageRuHeading: "",
						path: "/wallet"
					},
					businessCardHolders: {
						ruName: "Визитницы",
						subcategoryPageRuHeading: "",
						path: "/wallet?wallet_type%5B0%5D=card_holder&wallet_type%5Boperation%5D=union"
					},
					lighters: {
						ruName: "Зажигалки",
						subcategoryPageRuHeading: "",
						path: "/cigarettelighter"
					}
				}
			},
			cosmeticPerfumeryAccessories: {
				ruName: "Косметика, парфюмерия, аксессуары",
				subCategories: {
					perfumery: {
						ruName: "Парфюмерия",
						subcategoryPageRuHeading: "",
						path: "/parfume"
					},
					faceMakeup: {
						ruName: "Декоративная косметика для лица",
						subcategoryPageRuHeading: "",
						path: "/face_makeup"
					},
					eyesMakeup: {
						ruName: "Декоративная косметика для глаз",
						subcategoryPageRuHeading: "",
						path: "/eye_makeup"
					},
					lipsMakeup: {
						ruName: "Декоративная косметика для губ",
						subcategoryPageRuHeading: "",
						path: "/lip_makeup"
					},
					nailsCare: {
						ruName: "Средства по уходу за ногтями",
						subcategoryPageRuHeading: "",
						path: "/nailcare"
					},
					faceCare: {
						ruName: "Уход за лицом",
						subcategoryPageRuHeading: "",
						path: "/facial_cosmetics"
					},
					hairCare: {
						ruName: "Уход за волосами",
						subcategoryPageRuHeading: "",
						path: "/haircare"
					},
					bodyCare: {
						ruName: "Уход за телом",
						subcategoryPageRuHeading: "",
						path: "/body_care"
					},
					hairStyling: {
						ruName: "Средства для укладки волос",
						subcategoryPageRuHeading: "",
						path: "/hair_styling"
					},
					hairDye: {
						ruName: "Средства для окрашивания волос",
						subcategoryPageRuHeading: "",
						path: "/hair_color"
					},
					cosmeticsAccessories: {
						ruName: "Аксессуары для косметики",
						subcategoryPageRuHeading: "",
						path: "/cosmetics_access"
					},
					cosmeticMirrors: {
						ruName: "Косметические зеркала",
						subcategoryPageRuHeading: "",
						path: "/cosmetic_mirror"
					}
				}
			},
			health: {
				ruName: "Здоровье",
				subCategories: {
					fitnessBraceletsAndWatches: {
						ruName: "Фитнес-браслеты и часы",
						subcategoryPageRuHeading: "",
						path: "/smartwatch?sw_type[0]=bracelet&sw_type[operation]=union"
					},
					toothbrushes: {
						ruName: "Зубные щетки и ирригаторы",
						subcategoryPageRuHeading: "",
						path: "/toothbrush"
					},
					massagersAndMassageChairs: {
						ruName: "Массажеры и массажные кресла",
						subcategoryPageRuHeading: "",
						path: "/massagechair"
					},
					electricLinen: {
						ruName: "Электрогрелки, электроодеяла, электропростыни",
						subcategoryPageRuHeading: "",
						path: "/mobile_heater"
					},
					inhalers: {
						ruName: "Ингаляторы",
						subcategoryPageRuHeading: "",
						path: "/inhaler"
					},
					bloodPressureMonitors: {
						ruName: "Тонометры",
						subcategoryPageRuHeading: "",
						path: "/tonometers"
					},
					thermometers: {
						ruName: "Термометры",
						subcategoryPageRuHeading: "",
						path: "/medthermometer"
					},
					bloodGlucoseMeters: {
						ruName: "Глюкометры",
						subcategoryPageRuHeading: "",
						path: "/glucosemeter"
					},
					heartRateMonitors: {
						ruName: "Пульсометры, пульсоксиметры",
						subcategoryPageRuHeading: "",
						path: "/heart_rate"
					},
					physicalTherapyDevices: {
						ruName: "Приборы для физиотерапии",
						subcategoryPageRuHeading: "",
						path: "/physical_therapy"
					},
					nitratomersDosimeters: {
						ruName: "Нитратомеры, дозиметры, экотестеры",
						subcategoryPageRuHeading: "",
						path: "/nitrate"
					},
					contactLenses: {
						ruName: "Контактные линзы",
						subcategoryPageRuHeading: "",
						path: "/contact_lense"
					},
					lensSolutions: {
						ruName: "Растворы для линз",
						subcategoryPageRuHeading: "",
						path: "/solutionlenses"
					},
					massageBalls: {
						ruName: "Массажные мячи",
						subcategoryPageRuHeading: "",
						path: "/ball?ball_type%5B0%5D=massaging&ball_type%5Boperation%5D=union"
					}
				}
			},
			bodyCareEquipment: {
				ruName: "Приборы по уходу за телом",
				subCategories: {
					hairClippers: {
						ruName: "Машинки для стрижки волос",
						subcategoryPageRuHeading: "",
						path: "/hairclipper"
					},
					curlingIronsStylers: {
						ruName: "Плойки, стайлеры, щипцы",
						subcategoryPageRuHeading: "",
						path: "/styler"
					},
					hairdryers: {
						ruName: "Фены",
						subcategoryPageRuHeading: "",
						path: "/hairdryer"
					},
					toothbrushes: {
						ruName: "Зубные щетки и ирригаторы",
						subcategoryPageRuHeading: "",
						path: "/toothbrush"
					},
					shavers: {
						ruName: "Мужские электробритвы",
						subcategoryPageRuHeading: "",
						path: "/shaver"
					},
					ladyShavers: {
						ruName: "Женские электробритвы и эпиляторы",
						subcategoryPageRuHeading: "",
						path: "/ladyshaver"
					},
					scales: {
						ruName: "Напольные весы",
						subcategoryPageRuHeading: "",
						path: "/scales"
					},
					hydromassageBaths: {
						ruName: "Гидромассажные ванночки",
						subcategoryPageRuHeading: "",
						path: "/footbath"
					},
					manicureAndPedicureSets: {
						ruName: "Маникюрные и педикюрные наборы",
						subcategoryPageRuHeading: "",
						path: "/manicure"
					},
					skinCareDevices: {
						ruName: "Приборы для ухода за кожей",
						subcategoryPageRuHeading: "",
						path: "/skin_care_app"
					},
					cosmeticMirrors: {
						ruName: "Косметические зеркала",
						subcategoryPageRuHeading: "",
						path: "/cosmetic_mirror"
					},
					toothBrushesAccessories: {
						ruName: "Аксессуары для зубных щеток и ирригаторов",
						subcategoryPageRuHeading: "",
						path: "/beauty_acs?ba_purpos%5B0%5D=type1&ba_purpos%5B1%5D=type2&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForShavers: {
						ruName: "Аксессуары для электробритв и машинок",
						subcategoryPageRuHeading: "",
						path: "/beauty_acs?ba_purpos%5B0%5D=type4&ba_purpos%5B1%5D=type7&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForSkinCareProducts: {
						ruName: "Аксессуары для приборов по уходу за кожей",
						subcategoryPageRuHeading: "",
						path: "/beauty_acs?ba_purpos%5B0%5D=type3&ba_purpos%5B1%5D=faceclean&ba_purpos%5B2%5D=manicure&ba_purpos%5Boperation%5D=union"
					},
					replaceableRazorBlades: {
						ruName: "Сменные лезвия для бритвенных станков",
						subcategoryPageRuHeading: "",
						path: "/beauty_acs?ba_purpos%5B0%5D=britvstanok&ba_purpos%5Boperation%5D=union"
					}
				}
			},
			hobby: {
				ruName: "Хобби",
				subCategories: {
					electronicSteamGenerators: {
						ruName: "Электронные парогенераторы",
						subcategoryPageRuHeading: "",
						path: "/smoke"
					},
					fidgetSpinners: {
						ruName: "Фиджет спиннеры",
						subcategoryPageRuHeading: "",
						path: "/fidget_spinner"
					},
					constructors: {
						ruName: "Конструкторы",
						subcategoryPageRuHeading: "",
						path: "/buildingkit"
					},
					scaleModels: {
						ruName: "Сборные модели",
						subcategoryPageRuHeading: "",
						path: "/scale_model"
					},
					actionFigures: {
						ruName: "Экшен-фигурки",
						subcategoryPageRuHeading: "",
						path: "/doll?do_type%5B0%5D=actionfigure&do_type%5Boperation%5D=union"
					},
					boardGames: {
						ruName: "Настольные игры",
						subcategoryPageRuHeading: "",
						path: "/boardgame"
					},
					logicPuzzles: {
						ruName: "Логические игры, головоломки",
						subcategoryPageRuHeading: "",
						path: "/logic_puzzles"
					},
					rcAircraftModels: {
						ruName: "Радиоуправляемые авиамодели",
						subcategoryPageRuHeading: "",
						path: "/radiocontrolair"
					},
					rcCars: {
						ruName: "Радиоуправляемые автомодели",
						subcategoryPageRuHeading: "",
						path: "/radioautomodel"
					},
					rcShipModels: {
						ruName: "Радиоуправляемые судомодели",
						subcategoryPageRuHeading: "",
						path: "/radiomodelwater"
					},
					sewingMachines: {
						ruName: "Швейные машины",
						subcategoryPageRuHeading: "",
						path: "/sewingmachines"
					},
					overlocks: {
						ruName: "Оверлоки",
						subcategoryPageRuHeading: "",
						path: "/overlock"
					},
					radios: {
						ruName: "Радиоприемники",
						subcategoryPageRuHeading: "",
						path: "/radio"
					},
					telescopes: {
						ruName: "Телескопы",
						subcategoryPageRuHeading: "",
						path: "/telescope"
					},
					opticalAppliances: {
						ruName: "Бинокли и подзорные трубы",
						subcategoryPageRuHeading: "",
						path: "/optic"
					}
				}
			},
			tourismAndCamping: {
				ruName: "Туризм и кемпинг",
				subCategories: {
					tents: {
						ruName: "Палатки",
						subcategoryPageRuHeading: "",
						path: "/tents"
					},
					travelBackpacks: {
						ruName: "Туристические рюкзаки",
						subcategoryPageRuHeading: "",
						path: "/backpack?bap_type[0]=tourist&bap_type[operation]=union"
					},
					inflatableFurniture: {
						ruName: "Надувная мебель",
						subcategoryPageRuHeading: "",
						path: "/airbed"
					},
					campFurniture: {
						ruName: "Кемпинговая мебель",
						subcategoryPageRuHeading: "",
						path: "/camp_furniture"
					},
					sleepingBags: {
						ruName: "Спальные мешки",
						subcategoryPageRuHeading: "",
						path: "/sleepingbag"
					},
					travelMats: {
						ruName: "Туристические коврики",
						subcategoryPageRuHeading: "",
						path: "/travel_mat"
					},
					lanterns: {
						ruName: "Фонари",
						subcategoryPageRuHeading: "",
						path: "https://catalog.onliner.by/lights"
					},
					touristKnives: {
						ruName: "Туристические ножи",
						subcategoryPageRuHeading: "",
						path: "/foldingknives"
					},
					thermosesAndThermomugs: {
						ruName: "Термосы, термокружки",
						subcategoryPageRuHeading: "",
						path: "/thermosbottle"
					},
					touristBurnersAndStoves: {
						ruName: "Туристические горелки и плиты",
						subcategoryPageRuHeading: "",
						path: "/gascylinder"
					},
					grills: {
						ruName: "Мангалы, грили, барбекю",
						subcategoryPageRuHeading: "",
						path: "/grill"
					},
					carRefrigerators: {
						ruName: "Автохолодильники, термобоксы, термосумки",
						subcategoryPageRuHeading: "",
						path: "/arrefrigerator"
					},
					grillsAccessories: {
						ruName: "Принадлежности для барбекю, грилей, мангалов",
						subcategoryPageRuHeading: "",
						path: "/bbq_accessories"
					},
					portableRadioStations: {
						ruName: "Портативные радиостанции",
						subcategoryPageRuHeading: "",
						path: "/portableradio"
					},
					radios: {
						ruName: "Радиоприемники",
						subcategoryPageRuHeading: "",
						path: "/radio?pow_porta%5B0%5D=acc&pow_porta%5B1%5D=bat&pow_porta%5Boperation%5D=union"
					},
					travelNavigators: {
						ruName: "Туристические навигаторы",
						subcategoryPageRuHeading: "",
						path: "/travelgps"
					},
					opticalAppliances: {
						ruName: "Бинокли и подзорные трубы",
						subcategoryPageRuHeading: "",
						path: "/optic"
					},
					telescopes: {
						ruName: "Телескопы",
						subcategoryPageRuHeading: "",
						path: "/telescope"
					},
					cameraTraps: {
						ruName: "Фотоловушки",
						subcategoryPageRuHeading: "",
						path: "/camera_traps"
					}
				}
			},
			fishingAndWaterSport: {
				ruName: "Рыбалка, водный спорт",
				subCategories: {
					inflatableBoats: {
						ruName: "Надувные лодки",
						subcategoryPageRuHeading: "",
						path: "/inflatableboat"
					},
					outboardMotors: {
						ruName: "Лодочные моторы",
						subcategoryPageRuHeading: "",
						path: "/outboardmotors"
					},
					echoSounders: {
						ruName: "Эхолоты",
						subcategoryPageRuHeading: "",
						path: "/sounder"
					},
					rods: {
						ruName: "Удочки, спиннинги",
						subcategoryPageRuHeading: "",
						path: "/rod"
					},
					reels: {
						ruName: "Рыболовные катушки",
						subcategoryPageRuHeading: "",
						path: "/coil"
					},
					iceDrills: {
						ruName: "Ледобуры",
						subcategoryPageRuHeading: "",
						path: "/icescrew"
					},
					oilsForOutboardMotors: {
						ruName: "Масла для лодочных моторов",
						subcategoryPageRuHeading: "",
						path: "/twostrokeoil"
					},
					huntingAndFishingClothes: {
						ruName: "Одежда для охоты, рыбалки",
						subcategoryPageRuHeading: "",
						path: "/hunter_clothes"
					}
				}
			},
			fitnessEquipment: {
				ruName: "Тренажеры, фитнес, единоборства",
				subCategories: {
					weightTrainingEquipment: {
						ruName: "Силовые тренажеры",
						subcategoryPageRuHeading: "",
						path: "/strengthtrain"
					},
					exerciseBikes: {
						ruName: "Велотренажеры",
						subcategoryPageRuHeading: "",
						path: "/velosimulator"
					},
					treadmills: {
						ruName: "Беговые дорожки",
						subcategoryPageRuHeading: "",
						path: "/treadmills"
					},
					ellipticalTrainers: {
						ruName: "Эллиптические тренажеры",
						subcategoryPageRuHeading: "",
						path: "/ellipsoids"
					},
					rowingMachines: {
						ruName: "Гребные тренажеры",
						subcategoryPageRuHeading: "",
						path: "/rowingmachines"
					},
					steppers: {
						ruName: "Степперы",
						subcategoryPageRuHeading: "",
						path: "/stepper"
					},
					freeWeights: {
						ruName: "Гантели, штанги, гири",
						subcategoryPageRuHeading: "",
						path: "/freeweights"
					},
					nordicWalkingSticks: {
						ruName: "Палки для скандинавской ходьбы",
						subcategoryPageRuHeading: "",
						path: "/nordic_walking"
					},
					punchingBags: {
						ruName: "Груши, мешки, манекены для бокса и единоборств",
						subcategoryPageRuHeading: "",
						path: "/punching_bags"
					},
					boxingAndMartialArtsGloves: {
						ruName: "Перчатки для бокса и единоборств",
						subcategoryPageRuHeading: "",
						path: "/glovesmartialart"
					},
					sportsProtection: {
						ruName: "Спортивная защита",
						subcategoryPageRuHeading: "",
						path: "/sportsprotection"
					},
					trampolines: {
						ruName: "Батуты",
						subcategoryPageRuHeading: "",
						path: "/trampoline"
					},
					swedishWalls: {
						ruName: "Шведские стенки",
						subcategoryPageRuHeading: "",
						path: "/kidwallbars?kwb_wallbars=1"
					},
					gymBalls: {
						ruName: "Гимнастические мячи",
						subcategoryPageRuHeading: "",
						path: "/ball?ball_type[0]=gymnastic&ball_type[operation]=union"
					},
					yogaMats: {
						ruName: "Коврики для йоги и фитнеса",
						subcategoryPageRuHeading: "",
						path: "/yoga_mat"
					},
					protein: {
						ruName: "Протеин",
						subcategoryPageRuHeading: "",
						path: "/protein"
					}
				}
			},
			gameSports: {
				ruName: "Игровые виды спорта",
				subCategories: {
					sportsBalls: {
						ruName: "Спортивные мячи",
						subcategoryPageRuHeading: "",
						path: "/ball"
					},
					tennisTables: {
						ruName: "Теннисные столы",
						subcategoryPageRuHeading: "",
						path: "/tabletennis"
					},
					tennisRockets: {
						ruName: "Теннисные ракетки",
						subcategoryPageRuHeading: "",
						path: "/racktabletennis"
					},
					poolTables: {
						ruName: "Бильярдные столы",
						subcategoryPageRuHeading: "",
						path: "/billiardtable"
					},
					airHockeyFoosballMiniMilliards: {
						ruName: "Аэрохоккей, настольный футбол, мини-бильярд",
						subcategoryPageRuHeading: "",
						path: "/airhockey"
					},
					chess: {
						ruName: "Шахматы, шашки, нарды",
						subcategoryPageRuHeading: "",
						path: "/chess"
					},
					sportShoes: {
						ruName: "Спортивная обувь",
						subcategoryPageRuHeading: "",
						path: "/sneakers?sn_designation[0]=sport&sn_designation[operation]=union"
					}
				}
			},
			winterSports: {
				ruName: "Зимние виды спорта",
				subCategories: {
					sled: {
						ruName: "Санки",
						subcategoryPageRuHeading: "",
						path: "/sled"
					},
					skates: {
						ruName: "Коньки",
						subcategoryPageRuHeading: "",
						path: "/skates"
					},
					ski: {
						ruName: "Лыжи",
						subcategoryPageRuHeading: "",
						path: "/skis"
					},
					hockeySticks: {
						ruName: "Хоккейные клюшки",
						subcategoryPageRuHeading: "",
						path: "/hockeystick"
					},
					sportsProtection: {
						ruName: "Защита",
						subcategoryPageRuHeading: "",
						path: "/sportsprotection?spp_useage%5B0%5D=hockey&spp_useage%5B1%5D=skate2&spp_useage%5Boperation%5D=union"
					}
				}
			}
		}
	},
	childrenAndMamas: {
		id: 8,
		ruName: "Детям и мамам",
		categories: {
			walksAndTrips: {
				ruName: "Прогулки и поездки",
				subCategories: {
					babyStrollers: {
						ruName: "Коляски",
						subcategoryPageRuHeading: "",
						path: "/pram"
					},
					childCarSeats: {
						ruName: "Автокресла",
						subcategoryPageRuHeading: "",
						path: "/childcarseat"
					},
					babyCarryingBackpacks: {
						ruName: "Рюкзаки-переноски (кенгуру)",
						subcategoryPageRuHeading: "",
						path: "/babycarrier"
					},
					babyBikeSeats: {
						ruName: "Велокресла",
						subcategoryPageRuHeading: "",
						path: "/bikeseat"
					},
					childrenTrailers: {
						ruName: "Детские велоприцепы",
						subcategoryPageRuHeading: "",
						path: "/pram?pramconstruct%5B0%5D=trailer&pramconstruct%5Boperation%5D=union"
					}
				}
			},
			childrenTransport: {
				ruName: "Детский транспорт",
				subCategories: {
					childrenKickScooters: {
						ruName: "Самокаты",
						subcategoryPageRuHeading: "",
						path: "/kickscooter"
					},
					childrenPushBicycles: {
						ruName: "Детские велосипеды-каталки",
						subcategoryPageRuHeading: "",
						path: "/kidsbike?kb_seat[0]=withbackrest&kb_seat[1]=withadjbackrest&kb_seat[operation]=union"
					},
					tricycles: {
						ruName: "Трехколесные велосипеды",
						subcategoryPageRuHeading: "",
						path: "/kidsbike?num_wheels[0]=3&num_wheels[operation]=union&kb_seat[0]=simple&kb_seat[operation]=union"
					},
					sled: {
						ruName: "Санки",
						subcategoryPageRuHeading: "",
						path: "/sled"
					},
					balanceBikes: {
						ruName: "Беговелы",
						subcategoryPageRuHeading: "",
						path: "/balancebike"
					},
					babyWalkers: {
						ruName: "Ходунки, прыгунки",
						subcategoryPageRuHeading: "",
						path: "/babywalker"
					},
					childrenElectricCars: {
						ruName: "Электромобили",
						subcategoryPageRuHeading: "",
						path: "/electricrideon"
					},
					pedalCars: {
						ruName: "Каталки, педальные машинки",
						subcategoryPageRuHeading: "",
						path: "/rideon"
					}
				}
			},
			childrenFurniture: {
				ruName: "Детская мебель",
				subCategories: {
					babyCotBeds: {
						ruName: "Кроватки",
						subcategoryPageRuHeading: "",
						path: "/babycotbed"
					},
					highChairs: {
						ruName: "Стульчики для кормления",
						subcategoryPageRuHeading: "",
						path: "/highchair"
					},
					playpens: {
						ruName: "Манежи",
						subcategoryPageRuHeading: "",
						path: "/playpen"
					},
					cots: {
						ruName: "Детские кровати",
						subcategoryPageRuHeading: "",
						path: "/bed?b_child=1"
					},
					childrenTablesAndSchoolDesks: {
						ruName: "Столы и парты",
						subcategoryPageRuHeading: "",
						path: "/kidsdesk"
					},
					babyDressers: {
						ruName: "Детские комоды",
						subcategoryPageRuHeading: "",
						path: "/babydresser"
					},
					dressersForToys: {
						ruName: "Комоды для игрушек",
						subcategoryPageRuHeading: "",
						path: "/toystorage?ts_const%5B0%5D=chest&ts_const%5Boperation%5D=union&ts_purpos%5B0%5D=chlroom&ts_purpos%5Boperation%5D=union"
					},
					childrenChaiseLoungesAndRockingChairs: {
						ruName: "Детские шезлонги и качалки",
						subcategoryPageRuHeading: "",
						path: "/babyswing"
					},
					markerAndChalkBoards: {
						ruName: "Маркерные и меловые доски",
						subcategoryPageRuHeading: "",
						path: "/officeboard"
					}
				}
			},
			babySleep: {
				ruName: "Детский сон",
				subCategories: {
					babyCotBeds: {
						ruName: "Кроватки",
						subcategoryPageRuHeading: "",
						path: "/babycotbed"
					},
					cots: {
						ruName: "Детские кровати",
						subcategoryPageRuHeading: "",
						path: "/bed?b_child=1"
					},
					childrenLinen: {
						ruName: "Детское постельное белье",
						subcategoryPageRuHeading: "",
						path: "/bedlinen?bed_type%5B0%5D=kids&bed_type%5Boperation%5D=union"
					},
					childrenPillows: {
						ruName: "Подушки",
						subcategoryPageRuHeading: "",
						path: "/pillows?pil_type%5B0%5D=sleep&pil_type%5Boperation%5D=union&pil_size%5B0%5D=48x48&pil_size%5B1%5D=50x50&pil_size%5B2%5D=40x40&pil_size%5B3%5D=38x38&pil_size%5B4%5D=35x45&pil_size%5Boperation%5D=union"
					},
					childrenMattresses: {
						ruName: "Детские матрасы",
						subcategoryPageRuHeading: "",
						path: "/mattress?mtr_kid=1"
					},
					babyMonitors: {
						ruName: "Радионяни и видеоняни",
						subcategoryPageRuHeading: "",
						path: "/babymonitor"
					}
				}
			},
			boardAndEducationalGames: {
				ruName: "Настольные игры и развивающие игрушки",
				subCategories: {
					boardGames: {
						ruName: "Настольные игры",
						subcategoryPageRuHeading: "",
						path: "/boardgame"
					},
					constructors: {
						ruName: "Конструкторы",
						subcategoryPageRuHeading: "",
						path: "/buildingkit"
					},
					educationalToys: {
						ruName: "Развивающие игрушки",
						subcategoryPageRuHeading: "",
						path: "/edu_toys"
					},
					developmentalMats: {
						ruName: "Развивающие коврики",
						subcategoryPageRuHeading: "",
						path: "/playmats"
					},
					scaleModels: {
						ruName: "Сборные модели",
						subcategoryPageRuHeading: "",
						path: "/scale_model"
					},
					logicPuzzles: {
						ruName: "Логические игры, головоломки",
						subcategoryPageRuHeading: "",
						path: "/logic_puzzles"
					},
					pens3d: {
						ruName: "3D-ручки",
						subcategoryPageRuHeading: "",
						path: "/3d_pen"
					},
					fidgetSpinners: {
						ruName: "Фиджет спиннеры",
						subcategoryPageRuHeading: "",
						path: "/fidget_spinner"
					},
					scienceKits: {
						ruName: "Игры-опыты, эксперименты",
						subcategoryPageRuHeading: "",
						path: "/science_kits"
					}
				}
			},
			toysAndGames: {
				ruName: "Игрушки и игры",
				subCategories: {
					actionFigures: {
						ruName: "Экшен-фигурки",
						subcategoryPageRuHeading: "",
						path: "/doll?do_type%5B0%5D=actionfigure&do_type%5Boperation%5D=union"
					},
					babyDolls: {
						ruName: "Детские куклы",
						subcategoryPageRuHeading: "",
						path: "/doll?do_type%5B0%5D=doll&do_type%5Boperation%5D=union"
					},
					dollHouses: {
						ruName: "Кукольные домики",
						subcategoryPageRuHeading: "",
						path: "/dollhouses"
					},
					raceTracks: {
						ruName: "Детские автотреки, трассы",
						subcategoryPageRuHeading: "",
						path: "/race_track"
					},
					rcCars: {
						ruName: "Радиоуправляемые машинки",
						subcategoryPageRuHeading: "",
						path: "/radioautomodel"
					},
					rcAircraftModels: {
						ruName: "Радиоуправляемые самолеты и вертолеты",
						subcategoryPageRuHeading: "",
						path: "/radiocontrolair"
					},
					kidsRailRoads: {
						ruName: "Детские железные дороги",
						subcategoryPageRuHeading: "",
						path: "/kidsrailroad"
					},
					stuffedToys: {
						ruName: "Мягкие игрушки",
						subcategoryPageRuHeading: "",
						path: "/stuffedtoys"
					},
					interactiveToys: {
						ruName: "Интерактивные игрушки и роботы",
						subcategoryPageRuHeading: "",
						path: "/interactive_toys"
					},
					rcBoats: {
						ruName: "Радиоуправляемые катера",
						subcategoryPageRuHeading: "",
						path: "/radiomodelwater"
					},
					playHouses: {
						ruName: "Игровые домики и палатки",
						subcategoryPageRuHeading: "",
						path: "/playhouse"
					},
					airHockeyFoosballMiniMilliards: {
						ruName: "Аэрохоккей, настольный футбол, мини-бильярд",
						subcategoryPageRuHeading: "",
						path: "/airhockey"
					}
				}
			},
			outdoorGamesAndSport: {
				ruName: "Игры на улице и спорт",
				subCategories: {
					pools: {
						ruName: "Бассейны",
						path: "/pool"
					},
					swedishWalls: {
						ruName: "Шведские стенки",
						subcategoryPageRuHeading: "",
						path: "/kidwallbars?kwb_wallbars=1"
					},
					childrenStreetComplexesAndHills: {
						ruName: "Уличные комплексы и горки",
						subcategoryPageRuHeading: "",
						path: "/kidwallbars?kwb_type[0]=outdoor&kwb_type[operation]=union"
					},
					gardenSwings: {
						ruName: "Садовые качели",
						subcategoryPageRuHeading: "",
						path: "/gardenswing"
					},
					trampolines: {
						ruName: "Батуты",
						subcategoryPageRuHeading: "",
						path: "/trampoline"
					},
					balls: {
						ruName: "Мячи",
						subcategoryPageRuHeading: "",
						path: "/ball"
					},
					playhouses: {
						ruName: "Игровые домики и палатки",
						subcategoryPageRuHeading: "",
						path: "/playhouse"
					},
					childrenSkates: {
						ruName: "Коньки",
						subcategoryPageRuHeading: "",
						path: "/skates?type_skates%5B0%5D=child_skates&type_skates%5B1%5D=girls_skates&type_skates%5B2%5D=boy_skates&type_skates%5Boperation%5D=union"
					},
					childrenRollerSkates: {
						ruName: "Роликовые коньки",
						subcategoryPageRuHeading: "",
						path: "/rollerskates"
					},
					childrenKickScooters: {
						ruName: "Самокаты",
						subcategoryPageRuHeading: "",
						path: "/kickscooter?ks_targetaudienc%5B0%5D=kid&ks_targetaudienc%5Boperation%5D=union"
					},
					childrenSki: {
						ruName: "Лыжи",
						subcategoryPageRuHeading: "",
						path: "/skis?gender_skis%5B0%5D=child_skis&gender_skis%5Boperation%5D=union"
					},
					hockeySticks: {
						ruName: "Хоккейные клюшки",
						subcategoryPageRuHeading: "",
						path: "/hockeystick"
					},
					sportsProtection: {
						ruName: "Спортивная защита",
						subcategoryPageRuHeading: "",
						path: "/sportsprotection?spp_forwhom%5B0%5D=kids&spp_forwhom%5Boperation%5D=union"
					}
				}
			},
			newbornCare: {
				ruName: "Уход за новорожденными",
				subCategories: {
					diapers: {
						ruName: "Подгузники",
						subcategoryPageRuHeading: "",
						path: "/diapers"
					},
					babyMonitors: {
						ruName: "Радионяни и видеоняни",
						subcategoryPageRuHeading: "",
						path: "/babymonitor"
					},
					babyScales: {
						ruName: "Весы для новорожденных",
						subcategoryPageRuHeading: "",
						path: "/babyscales"
					},
					babyFoodMakers: {
						ruName: "Устройства для приготовления детского питания",
						subcategoryPageRuHeading: "",
						path: "/babyfoodmaker"
					},
					bottleWarmersAndSterilizers: {
						ruName: "Подогреватели и стерилизаторы бутылочек",
						subcategoryPageRuHeading: "",
						path: "/bottlesterilizer"
					},
					babyThermometers: {
						ruName: "Термометры",
						subcategoryPageRuHeading: "",
						path: "/medthermometer?baby_medtherm=1"
					},
					babyWashingPowders: {
						ruName: "Детские стиральные порошки",
						subcategoryPageRuHeading: "",
						path: "/washingpowder?typeoflinen[0]=washchild&typeoflinen[operation]=union"
					},
					breastPumpsAndAccessories: {
						ruName: "Молокоотсосы и аксессуары",
						subcategoryPageRuHeading: "",
						path: "/breast_pump"
					}
				}
			},
			goodsForSchool: {
				ruName: "Товары для школы",
				subCategories: {
					schoolBackpacks: {
						ruName: "Школьные рюкзаки",
						subcategoryPageRuHeading: "",
						path: "/backpack?bap_type[0]=school&bap_type[operation]=union"
					},
					childrenTablesAndSchoolDesks: {
						ruName: "Детские парты, столы, стулья",
						subcategoryPageRuHeading: "",
						path: "/kidsdesk"
					},
					childrenSmartWatches: {
						ruName: "Умные часы для детей",
						subcategoryPageRuHeading: "",
						path: "/smartwatch?sw_kid=1"
					},
					markerAndChalkBoards: {
						ruName: "Маркерные и меловые доски",
						subcategoryPageRuHeading: "",
						path: "/officeboard"
					},
					scienceKits: {
						ruName: "Игры-опыты, эксперименты",
						subcategoryPageRuHeading: "",
						path: "/science_kits"
					}
				}
			}
		}
	},
	workAndOffice: {
		id: 9,
		ruName: "Работа и офис",
		categories: {
			officeEquipment: {
				ruName: "Офисная техника и расходные материалы",
				subCategories: {
					printers: {
						ruName: "Принтеры и МФУ",
						subcategoryPageRuHeading: "",
						path: "/printers"
					},
					faxes: {
						ruName: "Факсы",
						subcategoryPageRuHeading: "",
						path: "/fax"
					},
					scanners: {
						ruName: "Сканеры",
						subcategoryPageRuHeading: "",
						path: "/scanner"
					},
					cartridges: {
						ruName: "Картриджи для принтеров",
						subcategoryPageRuHeading: "",
						path: "/cartridges"
					},
					shredders: {
						ruName: "Уничтожители бумаг (шредеры)",
						subcategoryPageRuHeading: "",
						path: "/shredder"
					},
					photoPaper: {
						ruName: "Бумага и материалы для печати",
						subcategoryPageRuHeading: "",
						path: "/photopaper"
					},
					paperCutters: {
						ruName: "Резаки для бумаги",
						subcategoryPageRuHeading: "",
						path: "/papercutter"
					},
					bookletMakers: {
						ruName: "Брошюровщики",
						subcategoryPageRuHeading: "",
						path: "/bindingmachines"
					},
					printers3d: {
						ruName: "3D-принтеры",
						subcategoryPageRuHeading: "",
						path: "/3dprinter"
					},
					suppliesFor3dPrinting: {
						ruName: "Расходные материалы для 3D-печати",
						subcategoryPageRuHeading: "",
						path: "/3d_filament"
					},
					surgeProtectors: {
						ruName: "Сетевые фильтры-удлинители",
						subcategoryPageRuHeading: "",
						path: "/voltageregulator?voltage_type[0]=surge&voltage_type[operation]=union"
					}
				}
			},
			officeFurniture: {
				ruName: "Офисная мебель",
				subCategories: {
					officeChairs: {
						ruName: "Офисные кресла, стулья",
						subcategoryPageRuHeading: "",
						path: "/office_chair"
					},
					officeTables: {
						ruName: "Офисные столы",
						subcategoryPageRuHeading: "",
						path: "/table?tbl_type%5B0%5D=executive&tbl_type%5B1%5D=conference&tbl_type%5B2%5D=office&tbl_type%5Boperation%5D=union"
					},
					officeSofas: {
						ruName: "Офисные диваны",
						subcategoryPageRuHeading: "",
						path: "/divan?di_office=1"
					},
					officeSafes: {
						ruName: "Сейфы",
						subcategoryPageRuHeading: "",
						path: "/furnituresafes"
					},
					officeBoards: {
						ruName: "Офисные доски, флипчарты",
						subcategoryPageRuHeading: "",
						path: "/officeboard"
					}
				}
			},
			tradeAndFinance: {
				ruName: "Торговля и финансы",
				subCategories: {
					cashRegisters: {
						ruName: "Кассовые аппараты",
						subcategoryPageRuHeading: "",
						path: "/cashregister"
					},
					banknoteAndCoinCounters: {
						ruName: "Счетчики банкнот и монет",
						subcategoryPageRuHeading: "",
						path: "/counters"
					},
					barcodeScanners: {
						ruName: "Сканеры штрих-кодов",
						subcategoryPageRuHeading: "",
						path: "/barcode"
					},
					currencyDetectors: {
						ruName: "Детекторы валют",
						subcategoryPageRuHeading: "",
						path: "/currencydetector"
					},
					matrixPrinters: {
						ruName: "Матричные принтеры",
						subcategoryPageRuHeading: "",
						path: "/matrixprinter"
					},
					printersOnLabelsAndReceipts: {
						ruName: "Принтеры на этикетках и чеках",
						subcategoryPageRuHeading: "",
						path: "/thermal"
					},
					dashboards: {
						ruName: "Информационные панели",
						subcategoryPageRuHeading: "",
						path: "/digitalsignage"
					},
					commercialRefrigerators: {
						ruName: "Торговые холодильники",
						subcategoryPageRuHeading: "",
						path: "/commfrige"
					},
					commercialTents: {
						ruName: "Шатры, тенты для торговли",
						subcategoryPageRuHeading: "",
						path: "/canopy_tents?ct_use%5B0%5D=2&ct_use%5Boperation%5D=union"
					},
					thermalCurtains: {
						ruName: "Тепловые завесы",
						subcategoryPageRuHeading: "",
						path: "/aircurtain"
					}
				}
			},
			publishingAndPrinting: {
				ruName: "Издательство и печать",
				subCategories: {
					printers: {
						ruName: "Принтеры и МФУ",
						subcategoryPageRuHeading: "",
						path: "/printers"
					},
					laminators: {
						ruName: "Ламинаторы",
						subcategoryPageRuHeading: "",
						path: "/laminator"
					},
					bookletMakers: {
						ruName: "Брошюровщики",
						subcategoryPageRuHeading: "",
						path: "/bindingmachines"
					},
					graphicTablets: {
						ruName: "Графические планшеты",
						subcategoryPageRuHeading: "",
						path: "/tablets"
					},
					officePaper: {
						ruName: "Офисная бумага",
						subcategoryPageRuHeading: "",
						path: "/photopaper?pp_type%5B0%5D=officepap&pp_type%5Boperation%5D=union"
					},
					selfAdhesivePaper: {
						ruName: "Самоклеящаяся бумага",
						subcategoryPageRuHeading: "",
						path: "/photopaper?pp_type[0]=selfadhesive&pp_type[operation]=union"
					},
					thermalTransferPaper: {
						ruName: "Термотрансферная бумага",
						subcategoryPageRuHeading: "",
						path: "/photopaper?pp_type[0]=thermaltransfer&pp_type[operation]=union"
					},
					photoPaper: {
						ruName: "Фотобумага",
						subcategoryPageRuHeading: "",
						path: "/photopaper?pp_type%5B0%5D=paper&pp_type%5Boperation%5D=union"
					}
				}
			},
			hygieneAndNutrition: {
				ruName: "Гигиена и питание",
				subCategories: {
					dispensers: {
						ruName: "Дозаторы, диспенсеры",
						subcategoryPageRuHeading: "",
						path: "/dispenser"
					},
					handDryers: {
						ruName: "Сушилки для рук, волос",
						subcategoryPageRuHeading: "",
						path: "/handsdryer"
					},
					waterCoolers: {
						ruName: "Кулеры для воды",
						subcategoryPageRuHeading: "",
						path: "/water_cooler"
					},
					coffeeMachinesAndCoffeeMakers: {
						ruName: "Кофемашины и кофеварки",
						subcategoryPageRuHeading: "",
						path: "/coffee"
					},
					coffee: {
						ruName: "Кофе",
						subcategoryPageRuHeading: "",
						path: "/coffeejava"
					},
					refrigerators: {
						ruName: "Холодильники",
						subcategoryPageRuHeading: "",
						path: "/refrigerator?type_refrigerato[0]=iceroom&type_refrigerato[operation]=union&type_freezer[0]=none&type_freezer[operation]=union&ref_usefulcap[to]=124"
					},
					microwaves: {
						ruName: "Микроволновые печи",
						subcategoryPageRuHeading: "",
						path: "/microvawe"
					}
				}
			},
			CCTV: {
				ruName: "Видеонаблюдение",
				subCategories: {
					ipCameras: {
						ruName: "IP-камеры",
						subcategoryPageRuHeading: "",
						path: "/ipcamera"
					},
					CCTV: {
						ruName: "Камеры CCTV",
						subcategoryPageRuHeading: "",
						path: "/cctvcamera"
					},
					DVRs: {
						ruName: "Видеорегистраторы",
						subcategoryPageRuHeading: "",
						path: "/dvr"
					},
					videoDoorPhones: {
						ruName: "Видеодомофоны",
						subcategoryPageRuHeading: "",
						path: "/videodoorphone"
					}
				}
			},
			transportAndTransportation: {
				ruName: "Транспорт и перевозки",
				subCategories: {
					gpsTrackers: {
						ruName: "GPS-трекеры",
						subcategoryPageRuHeading: "",
						path: "/gps_tracker"
					},
					DVRs: {
						ruName: "Видеорегистраторы",
						subcategoryPageRuHeading: "",
						path: "/videoregistrator"
					},
					gpsNavigators: {
						ruName: "GPS-навигаторы",
						subcategoryPageRuHeading: "",
						path: "/gps"
					},
					breathAnalyzers: {
						ruName: "Алкотестеры",
						subcategoryPageRuHeading: "",
						path: "/breathalyzer"
					}
				}
			},
			industryAndConstruction: {
				ruName: "Промышленность и строительство",
				subCategories: {
					woodworkingMachinery: {
						ruName: "Деревообрабатывающие станки",
						subcategoryPageRuHeading: "",
						path: "/woodworking"
					},
					metalworkingMachinery: {
						ruName: "Металлообрабатывающие станки",
						subcategoryPageRuHeading: "",
						path: "/metalworking"
					},
					electricMetalCutters: {
						ruName: "Электрические ножницы по металлу",
						subcategoryPageRuHeading: "",
						path: "/metal_cutter"
					},
					sharpeningMachines: {
						ruName: "Заточные станки (точила)",
						subcategoryPageRuHeading: "",
						path: "/benchgrinder"
					},
					electricAndGasCutters: {
						ruName: "Электро- и бензорезы",
						subcategoryPageRuHeading: "",
						path: "/powercutter"
					},
					pipeMetalRolling: {
						ruName: "Трубный металлопрокат",
						subcategoryPageRuHeading: "",
						path: "/metal_pipes"
					},
					sheetMetalRolling: {
						ruName: "Листовой металлопрокат",
						subcategoryPageRuHeading: "",
						path: "/sheetmetal"
					},
					fittings: {
						ruName: "Арматура",
						subcategoryPageRuHeading: "",
						path: "/armatura"
					},
					rabitz: {
						ruName: "Строительные сетки",
						subcategoryPageRuHeading: "",
						path: "/rabitz"
					},
					buildingMaterials: {
						ruName: "Общестроительные материалы",
						subcategoryPageRuHeading: "",
						path: "/buildingmaterial"
					},
					bricks: {
						ruName: "Кирпич",
						subcategoryPageRuHeading: "",
						path: "/bricks"
					},
					pavingSlabs: {
						ruName: "Тротуарная плитка",
						subcategoryPageRuHeading: "",
						path: "/pavers"
					}
				}
			}
		}
	}
}
