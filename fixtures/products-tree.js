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
						path: "/mobile"
					},
					headphones: {
						ruName: "Наушники",
						path: "/headphones"
					},
					smartWatch: {
						ruName: "Умные часы и фитнес-браслеты",
						path: "/smartwatch"
					},
					portableChargers: {
						ruName: "Портативные зарядные устройства",
						path: "/portablecharger"
					},
					memoryCards: {
						ruName: "Карты памяти",
						path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union"
					},
					phoneCases: {
						ruName: "Чехлы для телефонов",
						path: "/phonecase"
					},
					phoneAccumulators: {
						ruName: "Аккумуляторы",
						path: "/phoneaccum"
					},
					bluetoothHeadsets: {
						ruName: "Bluetooth-гарнитуры",
						path: "/bt"
					},
					selfieSticks: {
						ruName: "Палки для селфи",
						path: "/selfiestick"
					},
					cablesAndAdapters: {
						ruName: "Кабели, адаптеры",
						path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union"
					},
					carHolders: {
						ruName: "Автомобильные держатели",
						path: "/carholder"
					},
					carChargers: {
						ruName: "Зарядные устройства",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type&mc_devicetype%5Boperation%5D=union&mc_type%5B0%5D=network&mc_type%5Boperation%5D=union"
					},
					wirelessChargers: {
						ruName: "Беспроводные зарядные устройства",
						path: "/chargersmobile?mc_type%5B0%5D=wireless&mc_type%5Boperation%5D=union"
					},
					speakerDocks: {
						ruName: "Док-станции для смартфонов",
						path: "/speakerdock"
					}
				}
			},
			televisionAnDVideo: {
				ruName: "Телевидение и видео",
				subCategories: {
					tvSets: {
						ruName: "Телевизоры",
						path: "/tv"
					},
					terrestrials: {
						ruName: "Приемники цифрового ТВ",
						path: "/terrestrial"
					},
					satellites: {
						ruName: "Спутниковые ресиверы",
						path: "/satellite"
					},
					aerials: {
						ruName: "ТВ-антенны",
						path: "/aerial"
					},
					projectors: {
						ruName: "Проекторы",
						path: "/projector"
					},
					wallmounts: {
						ruName: "Кронштейны",
						path: "/wallmount"
					},
					mediaPlayers: {
						ruName: "Медиаплееры",
						path: "/media"
					},
					dvdPlayers: {
						ruName: "Плееры DVD и Blu-ray",
						path: "/dvd"
					},
					microPCs: {
						ruName: "Микро-ПК (HDMI-стики)",
						path: "/desktoppc?desktoppc_type%5B0%5D=micro&desktoppc_type%5Boperation%5D=union"
					},
					soundBars: {
						ruName: "Саундбары и домашние кинотеатры",
						path: "/soundbar"
					},
					tvAccessories: {
						ruName: "Аксессуары для ТВ",
						path: "/tvaccessory"
					},
					smartTvKeyboards: {
						ruName: "Клавиатуры для Smart TV",
						path: "/keyboards?mk_designation%5B0%5D=smarttv&mk_designation%5Boperation%5D=union"
					},
					avCables: {
						ruName: "Кабели, адаптеры для AV-аппаратуры",
						path: "/cable?cable_usage%5B0%5D=av&cable_usage%5Boperation%5D=union"
					},
					remoteControls: {
						ruName: "Универсальные пульты ДУ",
						path: "/remote"
					},
					projectorScreens: {
						ruName: "Проекционные экраны",
						path: "/projectorscreen"
					}
				}
			},
			tabsAndEbooks: {
				ruName: "Планшеты, электронные книги",
				subCategories: {
					tablets: {
						ruName: "Планшеты",
						path: "/tabletpc"
					},
					ebooks: {
						ruName: "Электронные книги",
						path: "/ebook"
					},
					tabletCases: {
						ruName: "Чехлы для планшетов",
						path: "/tabletcase"
					},
					portableChargers: {
						ruName: "Портативные зарядные устройства",
						path: "/portablecharger"
					},
					memoryCards: {
						ruName: "Карты памяти",
						path: "/memcards?typememcards%5B0%5D=microsd&typememcards%5B1%5D=microsdxc&typememcards%5B2%5D=microsdhc&typememcards%5Boperation%5D=union"
					},
					cablesAndAdapters: {
						ruName: "Кабели, адаптеры",
						path: "/cable?cable_usage%5B0%5D=phone&cable_usage%5Boperation%5D=union"
					},
					chargers: {
						ruName: "Зарядные устройства",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type3&mc_devicetype%5Boperation%5D=union"
					},
					wireless4gAnd3gModems: {
						ruName: "4G и 3G-модемы",
						path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union"
					},
					ebookCovers: {
						ruName: "Обложки для электронных книг",
						path: "/ebookcover"
					}
				}
			},
			audio: {
				ruName: "Аудиотехника",
				subCategories: {
					headphones: {
						ruName: "Наушники",
						path: "/headphones"
					},
					multimediaAcoustics: {
						ruName: "Мультимедиа акустика",
						path: "/sound"
					},
					wirelessSpeakers: {
						ruName: "Беспроводные и портативные колонки",
						path: "/wspeaker"
					},
					internetRadioStations: {
						ruName: "Интернет-радиостанции",
						path: "/wspeaker?netpl_inetradio=1"
					},
					mp3players: {
						ruName: "MP3-плееры",
						path: "/player"
					},
					hifiaudio: {
						ruName: "Музыкальные центры",
						path: "/hifiaudio"
					},
					microphones: {
						ruName: "Микрофоны",
						path: "/microphones"
					},
					hifisound: {
						ruName: "Акустика Hi-Fi и Hi-End",
						path: "/hifisound"
					},
					recievers: {
						ruName: "AV-ресиверы и усилители",
						path: "/recievers"
					},
					vinylRecordPlayers: {
						ruName: "Виниловые проигрыватели",
						path: "/turntable"
					},
					phonoStages: {
						ruName: "Фонокорректоры",
						path: "/phonopreamps"
					},
					networkPlayers: {
						ruName: "Сетевые проигрыватели",
						path: "/network_player"
					},
					radio: {
						ruName: "Радиоприемники",
						path: "/radio"
					},
					portCarAudio: {
						ruName: "Магнитолы",
						path: "/portaudio"
					},
					soundBars: {
						ruName: "Саундбары и домашние кинотеатры",
						path: "/soundbar"
					},
					clockRadios: {
						ruName: "Электронные и радиочасы",
						path: "/clockradio"
					},
					voiceRecorders: {
						ruName: "Диктофоны",
						path: "/voicerecorder"
					},
					cables: {
						ruName: "Кабели",
						path: "/cable"
					},
					vinylRecordPlayersAccessories: {
						ruName: "Звукосниматели, тонармы, иглы",
						path: "/turntableaccess"
					},
					headphoneAmplifiers: {
						ruName: "Усилители для наушников",
						path: "/portableamp"
					},
					speakerDocks: {
						ruName: "Док-станции для смартфонов",
						path: "/speakerdock"
					},
					remoteControls: {
						ruName: "Универсальные пульты ДУ",
						path: "/remote"
					}
				}
			},
			photoAndVideo: {
				ruName: "Фото- и видеотехника",
				subCategories: {
					cameras: {
						ruName: "Фотоаппараты",
						path: "/photo"
					},
					lenses: {
						ruName: "Объективы",
						path: "/lens"
					},
					actionCameras: {
						ruName: "Экшен-камеры",
						path: "/actioncamera"
					},
					actionCameraAccessories: {
						ruName: "Аксессуары и крепления для экшен-камер",
						path: "/actioncamera_acs"
					},
					videocameras: {
						ruName: "Видеокамеры",
						path: "/video"
					},
					photoPrinters: {
						ruName: "Фотопринтеры",
						path: "/printers?type_print[0]=photoprinter&type_print[operation]=union"
					},
					tripods: {
						ruName: "Штативы",
						path: "/tripod"
					},
					memoryCards: {
						ruName: "Карты памяти",
						path: "/memcards"
					},
					photoFrames: {
						ruName: "Цифровые фоторамки",
						path: "/photoframe"
					},
					flashes: {
						ruName: "Вспышки и лампы",
						path: "/flashes"
					},
					batteriesAccumulatorsChargers: {
						ruName: "Батарейки, аккумуляторы, зарядные",
						path: "/battery"
					},
					cases: {
						ruName: "Сумки и рюкзаки для фото/видео",
						path: "/case"
					},
					cardReaders: {
						ruName: "Карт-ридеры",
						path: "/cardreaders"
					},
					batteries: {
						ruName: "Аккумуляторы",
						path: "/batteries"
					},
					photoFilters: {
						ruName: "Светофильтры и конвертеры",
						path: "/photofilter"
					}
				}
			},
			videoGames: {
				ruName: "Видеоигры",
				subCategories: {
					consoles: {
						ruName: "Игровые приставки",
						path: "/console"
					},
					consoleGames: {
						ruName: "Игры для приставок",
						path: "/games"
					},
					pcGames: {
						ruName: "Игры для ПК",
						path: "/pcgames"
					},
					virtualReality: {
						ruName: "Очки виртуальной реальности",
						path: "/virtualreality"
					},
					controllersAndAccessories: {
						ruName: "Игровые контроллеры и аксессуары",
						path: "/controllers"
					},
					paymentCards: {
						ruName: "Карты оплаты и подписки",
						path: "/paymentcard"
					}
				}
			},
			gadgets: {
				ruName: "Гаджеты",
				subCategories: {
					subcategory: {
						ruName: "Умные часы и фитнес-браслеты",
						path: "/smartwatch"
					},
					heartRateMonitorsAndPulseOximeters: {
						ruName: "Пульсометры, пульсоксиметры",
						path: "/heart_rate"
					},
					strapsAndBracelets: {
						ruName: "Сменные ремешки и браслеты",
						path: "/replacementstrap"
					},
					virtualReality: {
						ruName: "Очки виртуальной реальности",
						path: "/virtualreality"
					},
					smartScales: {
						ruName: "Умные весы",
						path: "/scales?sc_synchronize=1"
					},
					nitratomersDosimeters: {
						ruName: "Нитратомеры, дозиметры, экотестеры",
						path: "/nitrate"
					},
					electronicSteamGenerators: {
						ruName: "Электронные парогенераторы",
						path: "/smoke"
					}
				}
			},
			smarthouseAndSurveillanceVideo: {
				ruName: "Умный дом и видеонаблюдение",
				subCategories: {
					smartHome: {
						ruName: "Умный дом",
						path: "/smart_home"
					},
					smartThermostats: {
						ruName: "Умные терморегуляторы",
						path: "/thermostat?smarthome=1"
					},
					smartLightBulbs: {
						ruName: "Умные лампочки",
						path: "/lightbulb?lib_smartlight=1"
					},
					smartSockets: {
						ruName: "Умные розетки",
						path: "/wall_socket?wallsoc_smart=1"
					},
					ipCameras: {
						ruName: "IP-камеры",
						path: "/ipcamera"
					},
					videoDoorPhones: {
						ruName: "Видеодомофоны",
						path: "/videodoorphone"
					},
					cctvCameras: {
						ruName: "Камеры CCTV",
						path: "/cctvcamera"
					},
					DVRs: {
						ruName: "Видеорегистраторы",
						path: "/dvr"
					},
					cameraTraps: {
						ruName: "Фотоловушки",
						path: "/camera_traps"
					}
				}
			},
			electricTransport: {
				ruName: "Электрический транспорт",
				subCategories: {
					electricScooters: {
						ruName: "Электросамокаты и электроскутеры",
						path: "/electric_scooter"
					},
					segways: {
						ruName: "Гироциклы",
						path: "/segway"
					},
					electrobikes: {
						ruName: "Электровелосипеды",
						path: "/electrobike"
					}
				}
			},
			telephonyAndCommunication: {
				ruName: "Телефония и связь",
				subCategories: {
					mobilePhones: {
						ruName: "Мобильные телефоны",
						path: "/mobile"
					},
					dectPhones: {
						ruName: "Радиотелефоны DECT",
						path: "/dect"
					},
					phones: {
						ruName: "Проводные телефоны",
						path: "/phone"
					},
					wireless3gModems: {
						ruName: "3G-модемы",
						path: "/wirelessadapter?wa_type%5B0%5D=3g&wa_type%5B1%5D=4g&wa_type%5Boperation%5D=union"
					},
					faxes: {
						ruName: "Факсы",
						path: "/fax"
					},

					portableRadioStations: {
						ruName: "Портативные радиостанции",
						path: "/portableradio"
					}
				}
			},
			musicEquipment: {
				ruName: "Музыкальное оборудование",
				subCategories: {
					synthesizersAndWorkstations: {
						ruName: "Синтезаторы и рабочие станции",
						path: "/synthandworkst"
					},
					audioInterfaces: {
						ruName: "Аудиоинтерфейсы",
						path: "/audiointerface"
					},
					concertAcoustics: {
						ruName: "Концертная акустика",
						path: "/concertacoustics"
					},
					studioMonitors: {
						ruName: "Студийные мониторы",
						path: "/studio_monitor"
					},
					guitarAmps: {
						ruName: "Гитарные комбоусилители",
						path: "/guitarcombo"
					},
					microphones: {
						ruName: "Микрофоны",
						path: "/microphones"
					}
				}
			},
			opticalAppliances: {
				ruName: "Оптические приборы",
				subCategories: {
					binoculars: {
						ruName: "Бинокли и подзорные трубы",
						path: "/optic"
					},
					telescopes: {
						ruName: "Телескопы",
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
						path: "/notebook"
					},
					tablets: {
						ruName: "Планшетные компьютеры",
						path: "/tabletpc"
					},
					monoblockPcs: {
						ruName: "Моноблоки",
						path: "/monoblock"
					},
					desktopPcs: {
						ruName: "Компьютеры",
						path: "/desktoppc"
					},
					monitors: {
						ruName: "Мониторы",
						path: "/display"
					}
				}
			},
			components: {
				ruName: "Комплектующие",
				subCategories: {
					videoCards: {
						ruName: "Видеокарты",
						path: "/videocard"
					},
					CPU: {
						ruName: "Процессоры",
						path: "/cpu"
					},
					motherboards: {
						ruName: "Материнские платы",
						path: "/motherboard"
					},
					RAM: {
						ruName: "Оперативная память",
						path: "/dram"
					},
					fans: {
						ruName: "Кулеры",
						path: "/fan"
					},
					SSD: {
						ruName: "SSD",
						path: "/ssd"
					},
					HDD: {
						ruName: "Жесткие диски",
						path: "/hdd"
					},
					computerCases: {
						ruName: "Корпуса",
						path: "/chassis"
					},
					powerSupplies: {
						ruName: "Блоки питания",
						path: "/powersupply"
					},
					soundCards: {
						ruName: "Звуковые карты",
						path: "/soundcard?type_soundcard%5B0%5D=internal&type_soundcard%5Boperation%5D=union"
					},
					networkAdapters: {
						ruName: "Сетевые адаптеры",
						path: "/networkadapter"
					},
					opticalDrives: {
						ruName: "Оптические приводы",
						path: "/optical"
					},
					tvTuners: {
						ruName: "ТВ-тюнеры",
						path: "/tvtuner?execution_tvtune%5B0%5D=in&execution_tvtune%5Boperation%5D=union"
					}
				}
			},
			forPrintingAndDesign: {
				ruName: "Техника для печати и дизайна",
				subCategories: {
					printers: {
						ruName: "Принтеры и МФУ",
						path: "/printers"
					},
					scanners: {
						ruName: "Сканеры",
						path: "/scanner"
					},
					accessoriesForOfficeEquipment: {
						ruName: "Аксессуары для оргтехники",
						path: "/officeequip_acs"
					},
					graphicTablets: {
						ruName: "Графические планшеты",
						path: "/tablets"
					},
					cartridges: {
						ruName: "Картриджи",
						path: "/cartridges"
					},
					photoPaper: {
						ruName: "Бумага и материалы для печати",
						path: "/photopaper"
					},
					laminators: {
						ruName: "Ламинаторы",
						path: "/laminator"
					},
					bookletMakers: {
						ruName: "Брошюровщики",
						path: "/bindingmachines"
					},
					matrixPrinters: {
						ruName: "Матричные принтеры",
						path: "/matrixprinter"
					},
					printers3d: {
						ruName: "3D-принтеры",
						path: "/3dprinter"
					},
					pens3d: {
						ruName: "3D-ручки",
						path: "/3d_pen"
					},
					suppliesFor3dPrinting: {
						ruName: "Расходные материалы для 3D-печати",
						path: "/3d_filament"
					}
				}
			},
			devicesForInputting: {
				ruName: "Манипуляторы и устройства ввода",
				subCategories: {
					mouses: {
						ruName: "Мыши",
						path: "/mouse"
					},
					keyboards: {
						ruName: "Клавиатуры",
						path: "/keyboards"
					},
					controllers: {
						ruName: "Игровые контроллеры и аксессуары",
						path: "/controllers"
					},
					graphicTablets: {
						ruName: "Графические планшеты",
						path: "/tablets"
					},
					peripheralKits: {
						ruName: "Наборы периферии (клавиатура + мышь)",
						path: "/peripheralkits"
					},
					mousePads: {
						ruName: "Коврики для мыши",
						path: "/mousepad"
					}
				}
			},
			dataStorage: {
				ruName: "Хранение данных",
				subCategories: {
					SSD: {
						ruName: "SSD",
						path: "/ssd"
					},
					HDD: {
						ruName: "Жесткие диси",
						path: "/hdd"
					},
					EXTERNALhDD: {
						ruName: "Внешние накопители (HDD и SSD)",
						path: "/externalhdd"
					},
					USBfLASH: {
						ruName: "Флешки USB",
						path: "/usbflash"
					},
					memoryCards: {
						ruName: "Карты памяти",
						path: "/memcards"
					},
					casesForHdd: {
						ruName: "Боксы для накопителей",
						path: "/hddbox"
					},
					NAS: {
						ruName: "Сетевые накопители (NAS)",
						path: "/nas"
					},

					opticalDrives: {
						ruName: "Оптические приводы",
						path: "/optical"
					},
					usbHubs: {
						ruName: "USB-хабы и док-станции",
						path: "/usbhub"
					},
					cardReaders: {
						ruName: "Карт-ридеры",
						path: "/cardreaders"
					}
				}
			},
			multimediaComponents: {
				ruName: "Мультимедиа периферия",
				subCategories: {
					pcAcoustics: {
						ruName: "Компьютерная акустика",
						path: "/sound"
					},
					headphones: {
						ruName: "Наушники",
						path: "/headphones"
					},
					webCameras: {
						ruName: "Веб-камеры",
						path: "/webcams"
					},
					ipCameras: {
						ruName: "IP-камеры",
						path: "/ipcamera"
					},
					audioInterfaces: {
						ruName: "Аудиоинтерфейсы",
						path: "/audiointerface"
					}
				}
			},
			networkHardware: {
				ruName: "Сетевое оборудование",
				subCategories: {
					wirelessRouters: {
						ruName: "Беспроводные маршрутизаторы",
						path: "/wrouter"
					},
					wirelessAdapters: {
						ruName: "Беспроводные адаптеры",
						path: "/wirelessadapter"
					},
					switches: {
						ruName: "Коммутаторы",
						path: "/switch"
					},
					dslModemsAndRouters: {
						ruName: "DSL-модемы и маршрутизаторы",
						path: "/dslmodem"
					},
					ipCameras: {
						ruName: "IP-камеры",
						path: "/ipcamera"
					},
					NAS: {
						ruName: "NAS",
						path: "/nas"
					},
					wirelessAccessPoints: {
						ruName: "Беспроводные точки доступа",
						path: "/wirelessap"
					},
					modemsFor3gAnd4G: {
						ruName: "4G и 3G-модемы",
						path: "/wirelessadapter?wa_type%5B0%5D=4g&wa_type%5B1%5D=3g&wa_type%5Boperation%5D=union"
					},
					networkCables: {
						ruName: "Сетевые кабели",
						path: "/cable?cable_usage%5B0%5D=type4&cable_usage%5Boperation%5D=union"
					},
					cableCrimpingTools: {
						ruName: "Инструмент для обжимки кабелей",
						path: "/household_tools?ht_type%5B0%5D=crimpingpliers&ht_type%5Boperation%5D=union&order=date:desc"
					},
					networkAdapters: {
						ruName: "Сетевые адаптеры",
						path: "/networkadapter"
					},
					powerlines: {
						ruName: "Сети по электропроводке (Powerline)",
						path: "/powerline"
					},
					wirelessAntennas: {
						ruName: "Антенны беспроводной связи",
						path: "/wantenna"
					}
				}
			},
			laptopAccessories: {
				ruName: "Аксессуары к ноутбукам и компьютерам",
				subCategories: {
					mobilePhones: {
						laptopBackpacks: "Рюкзаки для ноутбуков",
						path: "/backpack?bap_internaldep%5B0%5D=laptoptablet&bap_internaldep%5Boperation%5D=union"
					},
					laptopBags: {
						ruName: "Сумки для ноутбуков",
						path: "/notebookcase"
					},
					coolingCoasters: {
						ruName: "Охлаждающие подставки",
						path: "/laptopstand"
					},
					cablesAdaptersSplitters: {
						ruName: "Кабели, адаптеры, разветвители",
						path: "/cable?cable_usage%5B0%5D=pc&cable_usage%5Boperation%5D=union"
					},
					mousepads: {
						ruName: "Коврики для мыши",
						path: "/mousepad"
					},
					accumulatorsAndChargers: {
						ruName: "Аккумуляторы и зарядные устройства",
						path: "/nbbatteries?mfr%5B0%5D=for_notebook&mfr%5B1%5D=for_notebook_cha"
					},
					universalChargers: {
						ruName: "Универсальные зарядные устройства",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union"
					}
				}
			},
			chargers: {
				ruName: "Электропитание",
				subCategories: {
					ups: {
						ruName: "Источники бесперебойного питания",
						path: "/ups"
					},
					stabilizersAndSurgeProtectors: {
						ruName: "Стабилизаторы и сетевые фильтры",
						path: "/voltageregulator"
					},
					laptopBatteries: {
						ruName: "Аккумуляторы для ноутбуков",
						path: "/nbbatteries?mfr%5B0%5D=for_notebook"
					},
					chargers: {
						ruName: "Зарядные устройства",
						path: "/chargersmobile?mc_devicetype%5B0%5D=type2&mc_devicetype%5Boperation%5D=union"
					},
					cables: {
						ruName: "Кабели питания",
						path: "/cable?conn1%5B0%5D=c5&conn1%5Boperation%5D=intersect"
					},
					upsBatteries: {
						ruName: "Аккумуляторы для ИБП",
						path: "/ups_battery"
					}
				}
			},
			software: {
				ruName: "Игры и программное обеспечение",
				subCategories: {
					gamesForPc: {
						ruName: "Видеоигры для ПК",
						path: "/pcgames"
					},
					gamesForConsole: {
						ruName: "Видеоигры для консолей",
						path: "/games"
					},
					antiviruses: {
						ruName: "Антивирусы и безопасность",
						path: "/antivirus"
					},
					paymentCardsAndSubscriptions: {
						ruName: "Карты оплаты и подписки",
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
						path: "/refrigerator"
					},
					freezers: {
						ruName: "Морозильники",
						path: "/refrigerator?type_refrigerato%5B0%5D=chestfreezer&type_refrigerato%5B1%5D=freezer&type_refrigerato%5Boperation%5D=union"
					},
					washingMachines: {
						ruName: "Стиральные машины",
						path: "/washingmachine"
					},
					tumbleDryers: {
						ruName: "Сушильные машины",
						path: "/washingmachine?type_washm_bi[0]=dry_m&type_washm_bi[1]=dryingcabinet&type_washm_bi[operation]=union"
					},
					hoods: {
						ruName: "Вытяжки",
						path: "/hoods"
					},
					cookers: {
						ruName: "Кухонные плиты",
						path: "/cooker"
					},
					dishwashers: {
						ruName: "Посудомоечные машины",
						path: "/dishwasher"
					},
					wineRacks: {
						ruName: "Винные шкафы",
						path: "/wine_cabinets"
					},
					accessoriesForLargeHouseholdAppliances: {
						ruName: "Аксессуары для крупной бытовой техники",
						path: "/largehomeapp_acs"
					}
				}
			},
			builtInAppliances: {
				ruName: "Встраиваемая техника",
				subCategories: {
					hobs: {
						ruName: "Варочные панели",
						path: "/hob_cooker"
					},
					ovens: {
						ruName: "Духовые шкафы",
						path: "/oven_cooker"
					},
					hoods: {
						ruName: "Вытяжки",
						path: "/hoods"
					},
					dishwashers: {
						ruName: "Посудомоечные машины",
						path: "/dishwasher?location[0]=installation&location[operation]=union"
					},
					refrigerators: {
						ruName: "Холодильники",
						path: "/refrigerator?location[0]=installation&location[operation]=union"
					},
					washingMachines: {
						ruName: "Стиральные машины",
						path: "/washingmachine?location[0]=installation&location[operation]=union"
					},
					microwave: {
						ruName: "Микроволновые печи",
						path: "/microvawe?location[0]=installation&location[operation]=union"
					},
					coffeeMachines: {
						ruName: "Кофемашины",
						path: "/coffee?location[0]=installation&location[operation]=union"
					},
					foodWasteShredders: {
						ruName: "Измельчители пищевых отходов",
						path: "/disposer"
					},
					AccessoriesForBuiltInAppliances: {
						ruName: "Аксессуары для встраиваемой техники",
						path: "/largehomeapp_acs"
					}
				}
			},
			cleaning: {
				ruName: "Уборка",
				subCategories: {
					vacuumCleaners: {
						ruName: "Пылесосы",
						path: "/vacuumcleaner"
					},
					robotCleaners: {
						ruName: "Роботы-пылесосы",
						path: "/robotcleaner"
					},
					vacuumCleanersForWindows: {
						ruName: "Пылесосы для окон",
						path: "/vacuumcleaner?vc_type%5B0%5D=windowvc&vc_type%5Boperation%5D=union"
					},
					robotCleanersForWindows: {
						ruName: "Роботы для мытья окон",
						path: "/robotcleaner?robot_type%5B0%5D=1&robot_type%5Boperation%5D=union"
					},
					steamCleaners: {
						ruName: "Пароочистители",
						path: "/steamcleaner?steam_type%5B0%5D=purifier&steam_type%5Boperation%5D=union"
					},
					sweepers: {
						ruName: "Электровеники",
						path: "/sweeper"
					},
					accessoriesForVacuumCleaners: {
						ruName: "Аксессуары для пылесосов, пароочистителей",
						path: "/vacuum_acs"
					}
				}
			},
			clothesCare: {
				ruName: "Уход за одеждой, пошив",
				subCategories: {
					irons: {
						ruName: "Утюги",
						path: "/iron"
					},
					steamers: {
						ruName: "Отпариватели",
						path: "/steamcleaner?steam_type%5B0%5D=steamer&steam_type%5B1%5D=ironing_station&steam_type%5B2%5D=steampress&steam_type%5Boperation%5D=union"
					},
					ironingStationsAndPresses: {
						ruName: "Гладильные станции и прессы",
						path: "/steamcleaner?steam_type%5B0%5D=ironing_station&steam_type%5B1%5D=steampress&steam_type%5Boperation%5D=union"
					},
					sewingMachines: {
						ruName: "Швейные машины",
						path: "/sewingmachines"
					},
					overlocks: {
						ruName: "Оверлоки",
						path: "/overlock"
					},
					embroideryMachines: {
						ruName: "Вышивальные и швейно-вышивальные машины",
						path: "/sewingmachines?embroideryunit=1"
					},
					lintShavers: {
						ruName: "Машинки для удаления катышков",
						path: "/lintshaver"
					},
					accessoriesForIrons: {
						ruName: "Аксессуары для утюгов, гладильных систем",
						path: "/climate_acs?cla_purpos%5B0%5D=iron&cla_purpos%5B1%5D=gladsystem&cla_purpos%5B2%5D=press&cla_purpos%5Boperation%5D=union"
					}
				}
			},
			airConditioningEquipment: {
				ruName: "Климатическая техника",
				subCategories: {
					conditioners: {
						ruName: "Кондиционеры",
						path: "/conditioners"
					},
					waterHeater: {
						ruName: "Водонагреватели",
						path: "/waterheater"
					},
					heaters: {
						ruName: "Обогреватели",
						path: "/heater"
					},
					humidifiers: {
						ruName: "Увлажнители воздуха",
						path: "/humidifier"
					},
					boilers: {
						ruName: "Отопительные котлы",
						path: "/boiler"
					},
					blowers: {
						ruName: "Вентиляторы",
						path: "/blower"
					},
					airPurifiers: {
						ruName: "Очистители и мойки воздуха",
						path: "/airpurifier"
					},
					supplyAirVents: {
						ruName: "Приточные проветриватели",
						path: "/exhaustfan?ef_type%5B0%5D=passprov&ef_type%5B1%5D=recuperator&ef_type%5B2%5D=provbeznagr&ef_type%5B3%5D=provnagr&ef_type%5Boperation%5D=union"
					},
					meteoStations: {
						ruName: "Метеостанции",
						path: "/meteostations"
					},
					electricFireplaces: {
						ruName: "Электрокамины",
						path: "/electrofireplace"
					},
					dehumidifier: {
						ruName: "Осушители воздуха",
						path: "/dehumidifier"
					},
					insectKillers: {
						ruName: "Электронные уничтожители насекомых",
						path: "/insect_killer"
					},
					accessoriesForClimateEquipment: {
						ruName: "Аксессуары для климатической техники",
						path: "/climate_acs?cla_purpos%5B0%5D=humid&cla_purpos%5B1%5D=aircleaner&cla_purpos%5B2%5D=condic&cla_purpos%5Boperation%5D=union"
					}
				}
			},
			cooking: {
				ruName: "Приготовление пищи",
				subCategories: {
					microwaves: {
						ruName: "Микроволновые печи",
						path: "/microvawe"
					},
					multicookers: {
						ruName: "Мультиварки",
						path: "/multicooker"
					},
					tabletopCookers: {
						ruName: "Настольные плиты",
						path: "/tabletop_cooker"
					},
					roasters: {
						ruName: "Мини-печи",
						path: "/roaster"
					},
					toasters: {
						ruName: "Тостеры",
						path: "/toaster"
					},
					waffleMakers: {
						ruName: "Вафельницы",
						path: "/waffle"
					},
					sandwichers: {
						ruName: "Сэндвичницы",
						path: "/sandwichers"
					},
					aerogrills: {
						ruName: "Аэрогрили",
						path: "/aerogrill"
					},
					breadMakers: {
						ruName: "Хлебопечки",
						path: "/breadmaker"
					},
					electricGrills: {
						ruName: "Электрогрили",
						path: "/electricgrill"
					},
					electricSkewers: {
						ruName: "Электрошашлычницы",
						path: "/electrobarbecue"
					},
					steamers: {
						ruName: "Пароварки",
						path: "/steamers"
					},
					yogurtMakers: {
						ruName: "Йогуртницы и мороженицы",
						path: "/yogurtmaker"
					},
					deepFryers: {
						ruName: "Фритюрницы",
						path: "/fryer"
					},
					crepeMakers: {
						ruName: "Блинницы",
						path: "/crepemaker"
					},
					eggMakers: {
						ruName: "Яйцеварки",
						path: "/eggmaker"
					},
					accessoriesForKitchenEquipment: {
						ruName: "Аксессуары для кухонной техники",
						path: "/kitchen_acs"
					}
				}
			},
			teaAndCoffeePreparation: {
				ruName: "Приготовление кофе и чая",
				subCategories: {
					coffeeMachines: {
						ruName: "Кофемашины",
						path: "/coffee?type_coffee[0]=coffee_machine&type_coffee[operation]=union"
					},
					coffeeMakers: {
						ruName: "Кофеварки",
						path: "/coffee?type_coffee[0]=espresso_coffee&type_coffee[1]=dropping_coffee&type_coffee[2]=boiler&type_coffee[3]=turkey&type_coffee[4]=pour_over&type_coffee[5]=geyzernaya_coffe&type_coffee[operation]=union"
					},
					capsuleCoffeeMakersAndCoffeeMachines: {
						ruName: "Капсульные кофеварки и кофемашины",
						path: "/coffee?type_coffee[0]=capsules&type_coffee[1]=capsule_machine&type_coffee[operation]=union"
					},
					electricKettles: {
						ruName: "Электрочайники и термопоты",
						path: "/kettle"
					},
					kettles: {
						ruName: "Чайники",
						path: "/kettles"
					},
					teapots: {
						ruName: "Заварочные чайники, кофеварки, френч-прессы",
						path: "/teapot"
					},
					coffeeGrinders: {
						ruName: "Кофемолки",
						path: "/coffeegrinders"
					},
					milkFrothers: {
						ruName: "Вспениватели молока",
						path: "/milkfrother"
					},
					coffee: {
						ruName: "Кофе",
						path: "/coffeejava"
					},
					tea: {
						ruName: "Чай",
						path: "/tea"
					},
					accessoriesForCoffeeMachinesAndKettles: {
						ruName: "Аксессуары для кофемашин, кофеварок, чайников",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type4&ka_purpos%5B1%5D=kettletermopot&ka_purpos%5Boperation%5D=union"
					}
				}
			},
			foodPreparation: {
				ruName: "Подготовка и обработка продуктов",
				subCategories: {
					blenders: {
						ruName: "Блендеры",
						path: "/blender"
					},
					foodProcessors: {
						ruName: "Кухонные комбайны",
						path: "/foodprocessors"
					},
					meatGrinders: {
						ruName: "Мясорубки",
						path: "/meatgrinder"
					},
					mixers: {
						ruName: "Миксеры",
						path: "/mixer"
					},
					juicers: {
						ruName: "Соковыжималки",
						path: "/juicer"
					},
					foodDehydrators: {
						ruName: "Сушилки для овощей и фруктов",
						path: "/food_dehydrator"
					},
					kitchenScales: {
						ruName: "Кухонные весы",
						path: "/kitchenscales"
					},
					slicers: {
						ruName: "Ломтерезки",
						path: "/slicer"
					},
					choppers: {
						ruName: "Измельчители (чопперы)",
						path: "/chopper"
					},
					vacuumPackers: {
						ruName: "Вакуумные упаковщики",
						path: "/vacuummachine"
					},
					marinators: {
						ruName: "Маринаторы",
						path: "/marinator"
					},
					accessoriesForFoodProcessingEquipment: {
						ruName: "Аксессуары для кухонной техники",
						path: "/kitchen_acs"
					}
				}
			},
			bodyAndHairCare: {
				ruName: "Уход за волосами и телом",
				subCategories: {
					hairClippers: {
						ruName: "Машинки для стрижки волос",
						path: "/hairclipper"
					},
					curlingIronsStylers: {
						ruName: "Плойки, стайлеры, щипцы",
						path: "/styler"
					},
					hairDryers: {
						ruName: "Фены",
						path: "/hairdryer"
					},
					toothBrushes: {
						ruName: "Зубные щетки и ирригаторы",
						path: "/toothbrush"
					},
					shavers: {
						ruName: "Мужские электробритвы",
						path: "/shaver"
					},
					ladyShavers: {
						ruName: "Женские электробритвы и эпиляторы",
						path: "/ladyshaver"
					},
					scales: {
						ruName: "Напольные весы",
						path: "/https://catalog.onliner.by/scales"
					},
					hydromassageBaths: {
						ruName: "Гидромассажные ванночки",
						path: "/footbath"
					},
					manicureAndPedicureSets: {
						ruName: "Маникюрные и педикюрные наборы",
						path: "/manicure"
					},
					accessoriesForBeautyEquipment: {
						ruName: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs"
					}
				}
			},
			healthEquipment: {
				ruName: "Техника для здоровья",
				subCategories: {
					inhalers: {
						ruName: "Ингаляторы",
						path: "/inhaler"
					},
					toothBrushes: {
						ruName: "Зубные щетки и ирригаторы",
						path: "/toothbrush"
					},
					tonometers: {
						ruName: "Тонометры",
						path: "/tonometers"
					},
					thermometers: {
						ruName: "Термометры",
						path: "/medthermometer"
					},
					glucoseMeter: {
						ruName: "Глюкометры",
						path: "/glucosemeter"
					},
					heartRateMonitors: {
						ruName: "Пульсометры, пульсоксиметры",
						path: "/heart_rate"
					},
					contactLenses: {
						ruName: "Контактные линзы",
						path: "/contact_lense"
					},
					lensSolutions: {
						ruName: "Растворы для линз",
						path: "/solutionlenses"
					},
					accessoriesForHealthEquipment: {
						ruName: "Аксессуары к товарам для красоты и здоровья",
						path: "/beauty_acs"
					}
				}
			},
			accessoriesAndPeripheral: {
				ruName: "Аксессуары и сопутствующие товары",
				subCategories: {
					laundryDryers: {
						ruName: "Сушилки для белья",
						path: "/linendryer"
					},
					ironinBboards: {
						ruName: "Гладильные доски",
						path: "/ironingboard"
					},
					washingPowder: {
						ruName: "Средства для стирки и ухода за бельем",
						path: "/washingpowder"
					},
					dishwasherTools: {
						ruName: "Средства для посудомоечных машин",
						path: "/dishwashertablet"
					},
					accessoriesForCoffeeMachinesAndKettles: {
						ruName: "Аксессуары для кофемашин, кофеварок, чайников",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type4&ka_purpos%5B1%5D=kettletermopot&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForBlendersGrinders: {
						ruName: "Аксессуары для блендеров, комбайнов, мясорубок",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type3&ka_purpos%5B1%5D=type2&ka_purpos%5B2%5D=type1&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForVacuumPackers: {
						ruName: "Аксессуары для вакуумных упаковщиков",
						path: "/kitchen_acs?ka_purpos%5B0%5D=vacuumupakov&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForMultiCookers: {
						ruName: "Аксессуары для мультиварок, аэрогрилей",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type6&ka_purpos%5B1%5D=type12&ka_purpos%5Boperation%5D=union"
					},
					replaceablePanelsForSandwichMakers: {
						ruName: "Сменные панели для сэндвичниц",
						path: "/kitchen_acs?ka_purpos%5B0%5D=type7&ka_purpos%5Boperation%5D=union"
					},
					accessoriesForTooyhBrushes: {
						ruName: "Аксессуары для зубных щеток и ирригаторов",
						path: "/beauty_acs?ba_purpos%5B0%5D=type1&ba_purpos%5B1%5D=type2&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForShavers: {
						ruName: "Аксессуары для электробритв и машинок",
						path: "/beauty_acs?ba_purpos%5B0%5D=type4&ba_purpos%5B1%5D=type7&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForSkinCareProducts: {
						ruName: "Аксессуары для приборов по уходу за кожей",
						path: "/beauty_acs?ba_purpos%5B0%5D=type3&ba_purpos%5B1%5D=faceclean&ba_purpos%5B2%5D=manicure&ba_purpos%5Boperation%5D=union"
					},
					replaceableRazorBlades: {
						ruName: "Сменные лезвия для бритвенных станков",
						path: "/beauty_acs?ba_purpos%5B0%5D=britvstanok&ba_purpos%5Boperation%5D=union"
					},
					accessoriesForVacuumCleaners: {
						ruName: "Аксессуары для пылесосов",
						path: "/vacuum_acs?va_purpos%5B0%5D=vacuumcleaner&va_purpos%5B1%5D=robotcleaner&va_purpos%5B2%5D=floorcleaner&va_purpos%5Boperation%5D=union"
					},
					accessoriesForSteamCleaners: {
						ruName: "Аксессуары для пароочистителей",
						path: "/vacuum_acs?va_purpos%5B0%5D=steamcleaner&va_purpos%5Boperation%5D=union"
					},
					accessoriesForLargeHouseholdAndBuiltInAppliances: {
						ruName: "Аксессуары для крупной бытовой и встраиваемой техники",
						path: "/largehomeapp_acs"
					},
					accessoriesForIrons: {
						ruName: "Аксессуары для утюгов, гладильных систем",
						path: "/climate_acs?cla_purpos%5B0%5D=iron&cla_purpos%5B1%5D=gladsystem&cla_purpos%5B2%5D=press&cla_purpos%5Boperation%5D=union"
					},
					accessoriesForClimateEquipment: {
						ruName: "Аксессуары для климатической техники",
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
						path: "/drills"
					},
					rotaryhammers: {
						ruName: "Перфораторы",
						path: "/rotaryhammers"
					},
					toolKits: {
						ruName: "Наборы ручных инструментов",
						path: "/tool_kits"
					},
					electricScrewdrivers: {
						ruName: "Электроотвертки",
						path: "/screwdriver?typescrewdriver[0]=simplescrewdrive&typescrewdriver[operation]=union"
					},
					screwdrivers: {
						ruName: "Шуруповерты, винтоверты",
						path: "/screwdriver?typescrewdriver[0]=hardscrewdrive&typescrewdriver[1]=vintovert&typescrewdriver[operation]=union"
					},
					toolsAccumulators: {
						ruName: "Аккумуляторы и зарядные устройства для инструмента",
						path: "/tools_accum"
					},
					drillsMixers: {
						ruName: "Дрели-миксеры",
						path: "/drills?type_drill[0]=drill_mixer&type_drill[operation]=union"
					},
					angleGrinders: {
						ruName: "Угловые шлифмашины (болгарки)",
						path: "/angle_grinder"
					},
					grinders: {
						ruName: "Шлифмашины",
						path: "/grinder"
					},
					polishingMachines: {
						ruName: "Полировальные машины",
						path: "/grinder?tupe_grinder[0]=polish&tupe_grinder[operation]=union"
					},
					multiTools: {
						ruName: "Мультитулы",
						path: "/grinder?tupe_grinder[0]=multi_grinder&tupe_grinder[operation]=union"
					},
					circularSaws: {
						ruName: "Дисковые пилы",
						path: "/electric_saw?type_saw[0]=disk&type_saw[operation]=union"
					},
					reciprocatingSaws: {
						ruName: "Сабельные пилы",
						path: "/electric_saw?type_saw[0]=saber&type_saw[operation]=union"
					},
					fretSaws: {
						ruName: "Лобзики",
						path: "/fretsaw"
					},
					planes: {
						ruName: "Рубанки",
						path: "/plane"
					},
					tools: {
						ruName: "Строительный, слесарный, монтажный инструмент",
						path: "/household_tools"
					},
					toolBoxes: {
						ruName: "Ящики для инструментов",
						path: "/toolbox"
					},
					millingCutters: {
						ruName: "Фрезеры",
						path: "/woodrouter"
					},
					industrialDryers: {
						ruName: "Промышленные фены",
						path: "/industrialdryer"
					},
					hotGlueGuns: {
						ruName: "Термоклеевые пистолеты",
						path: "/hotgluegun"
					},
					engravers: {
						ruName: "Граверы",
						path: "/engraver"
					},
					householdVacuumCleaners: {
						ruName: "Хозяйственные пылесосы",
						path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union"
					},
					sprayGuns: {
						ruName: "Краскораспылители",
						path: "/electricspraygun"
					},
					wallChasers: {
						ruName: "Штроборезы",
						path: "/wallchaser"
					},
					tileCutters: {
						ruName: "Плиткорезы",
						path: "/tilecutter"
					},
					solderingIrons: {
						ruName: "Паяльники и паяльные лампы",
						path: "/solderingiron"
					},
					pipeWeldingMachines: {
						ruName: "Аппараты для сварки труб",
						path: "/pipe_welding"
					},
					electricJackhammers: {
						ruName: "Электрические отбойные молотки",
						path: "/jackhammer?jh_type[0]=electric&jh_type[operation]=union"
					},
					electricMetalCutters: {
						ruName: "Электрические ножницы по металлу",
						path: "/metal_cutter"
					},
					nailers: {
						ruName: "Скобозабиватели, гвоздезабиватели, степлеры",
						path: "/nailer"
					},
					thermalImaging: {
						ruName: "Диагностические тепловизоры и пирометры",
						path: "/thermal_imaging"
					}
				}
			},
			buildingEquipment: {
				ruName: "Строительное оборудование",
				subCategories: {
					welders: {
						ruName: "Сварочные аппараты",
						path: "/weldinginverter"
					},
					compressors: {
						ruName: "Компрессоры",
						path: "/compressor"
					},
					laserLevels: {
						ruName: "Лазерные нивелиры",
						path: "/laserlevel"
					},
					heatGuns: {
						ruName: "Тепловые пушки",
						path: "/heat_gun"
					},
					generators: {
						ruName: "Генераторы",
						path: "/powerstations"
					},
					concreteMixers: {
						ruName: "Бетономешалки",
						path: "/concrete"
					},
					weldingMasks: {
						ruName: "Сварочные маски",
						path: "/weldingmask"
					},
					householdVacuumCleaners: {
						ruName: "Хозяйственные пылесосы",
						path: "/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union"
					},
					wheelbarrows: {
						ruName: "Строительные тачки",
						path: "/barrow"
					},
					stairsAndLadders: {
						ruName: "Лестницы и стремянки",
						path: "/stairandladder"
					},
					laserRangefinders: {
						ruName: "Лазерные дальномеры",
						path: "/laserdistmeter"
					},
					vibratingPlates: {
						ruName: "Виброплиты",
						path: "/platecompactor"
					},
					jackhammers: {
						ruName: "Отбойные молотки",
						path: "/jackhammer"
					},
					electricAndGasCutters: {
						ruName: "Электро- и бензорезы",
						path: "/powercutter"
					},
					motorPumps: {
						ruName: "Мотопомпы",
						path: "/motopump"
					}
				}
			},
			floorCoverings: {
				ruName: "Напольные покрытия",
				subCategories: {
					laminate: {
						ruName: "Ламинат",
						path: "/laminate"
					},
					linoleum: {
						ruName: "Линолеум",
						path: "/linoleum"
					},
					vinylFloor: {
						ruName: "Виниловые полы",
						path: "/vinyl_floor"
					},
					tile: {
						ruName: "Плитка",
						path: "/tile?t_kind%5B0%5D=floor&t_kind%5Boperation%5D=union"
					},
					parquetBoard: {
						ruName: "Паркетная доска",
						path: "/parquetboard"
					}
				}
			},
			plumbing: {
				ruName: "Сантехника",
				subCategories: {
					kitchenSinks: {
						ruName: "Кухонные мойки",
						path: "/kitchensink"
					},
					faucets: {
						ruName: "Смесители",
						path: "/faucet"
					},
					bathtubs: {
						ruName: "Ванны",
						path: "/bathtub"
					},
					towelWarmers: {
						ruName: "Полотенцесушители",
						path: "/towelrail"
					},
					showerCabins: {
						ruName: "Душевые кабины",
						path: "/showerbox"
					},
					washbasins: {
						ruName: "Умывальники",
						path: "/washbasin"
					},
					pedestalForWashbasins: {
						ruName: "Пьедесталы для умывальников",
						path: "/pedestal"
					},
					siphons: {
						ruName: "Сифоны",
						path: "/siphon"
					},
					pans: {
						ruName: "Унитазы",
						path: "/wcpan"
					},
					bidets: {
						ruName: "Биде",
						path: "/bidet"
					},
					installationsForPansSinksBidets: {
						ruName: "Инсталляции для унитазов, раковин, биде и писсуаров",
						path: "/installations"
					},
					flushingSystems: {
						ruName: "Клавиши и системы смыва",
						path: "/flushing_system"
					},
					electronicBidetCovers: {
						ruName: "Электронные крышки-биде",
						path: "/toilet_shower"
					},
					dryClosets: {
						ruName: "Биотуалеты",
						path: "/biotoilet"
					},
					showerPanels: {
						ruName: "Душевые панели и гарнитуры",
						path: "/shower"
					},
					showerTrays: {
						ruName: "Душевые поддоны",
						path: "/shower_trays"
					},
					dispensers: {
						ruName: "Дозаторы, диспенсеры",
						path: "/dispenser"
					},
					handsDryers: {
						ruName: "Сушилки для рук, волос",
						path: "/handsdryer"
					}
				}
			},
			waterSupplySewerageVentilation: {
				ruName: "Водоснабжение, канализация, вентиляция",
				subCategories: {
					waterHeaters: {
						ruName: "Водонагреватели",
						path: "/waterheater"
					},
					pumps: {
						ruName: "Насосы",
						path: "/pump"
					},
					exhaustFans: {
						ruName: "Приточные и вытяжные вентиляторы",
						path: "/exhaustfan"
					},
					supplyAirVents: {
						ruName: "Приточные проветриватели",
						path: "/exhaustfan?ef_type%5B0%5D=passprov&ef_type%5B1%5D=recuperator&ef_type%5B2%5D=provbeznagr&ef_type%5B3%5D=provnagr&ef_type%5Boperation%5D=union"
					},
					waterAccumulators: {
						ruName: "Гидроаккумуляторы",
						path: "/hydroaccum?ha_type%5B0%5D=type1&ha_type%5Boperation%5D=union"
					},
					pipesAndFittings: {
						ruName: "Трубы, фитинг",
						path: "/tube_fitting"
					},
					accessPanels: {
						ruName: "Сантехнические ревизионные люки",
						path: "/access_panel"
					},
					waterAndGasPipes: {
						ruName: "Трубы водогазопроводные",
						path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union"
					},
					boilers: {
						ruName: "Отопительные котлы",
						path: "/boiler"
					},
					radiators: {
						ruName: "Радиаторы отопления",
						path: "/radiators"
					}
				}
			},
			powerSupply: {
				ruName: "Электроснабжение",
				subCategories: {
					socketsAndSwitches: {
						ruName: "Розетки, выключатели",
						path: "/wall_socket"
					},
					multimeters: {
						ruName: "Мультиметры, токовые клещи, индикаторные отвертки",
						path: "/multimeter"
					},
					chandeliersAndLamps: {
						ruName: "Люстры и светильники",
						path: "/luster"
					},
					bulbs: {
						ruName: "Лампочки",
						path: "/lightbulb"
					},
					stabilizersAndSurgeProtectors: {
						ruName: "Стабилизаторы и сетевые фильтры",
						path: "/voltageregulator?voltage_type[0]=stabilizer&voltage_type[operation]=union"
					},
					generators: {
						ruName: "Генераторы",
						path: "/powerstations"
					}
				}
			},
			heating: {
				ruName: "Отопление, теплоизоляция",
				subCategories: {
					boilers: {
						ruName: "Отопительные котлы",
						path: "/boiler"
					},
					pumpForHeatingSystems: {
						ruName: "Насосы для систем отопления",
						path: "/pump?pump_purpose%5B0%5D=heating&pump_purpose%5Boperation%5D=union"
					},
					radiators: {
						ruName: "Радиаторы отопления",
						path: "/radiators"
					},
					thermalInsulation: {
						ruName: "Теплоизоляция",
						path: "/therminsulation"
					},
					soundAndVibrationIsolation: {
						ruName: "Звуко- и виброизоляция помещений",
						path: "/soundproofing"
					},
					warmFloor: {
						ruName: "Теплые полы",
						path: "/heatedfloor"
					},
					towelWarmers: {
						ruName: "Полотенцесушители",
						path: "/towelrail"
					},
					temperatureControllers: {
						ruName: "Терморегуляторы",
						path: "/thermostat"
					},
					fireplaces: {
						ruName: "Дровяные камины, печи-камины, порталы",
						path: "/stove"
					},
					expansionTanks: {
						ruName: "Расширительные баки",
						path: "/hydroaccum?ha_type%5B0%5D=type2&ha_type%5Boperation%5D=union"
					},
					tubesAndFittings: {
						ruName: "Трубы, фитинг",
						path: "/tube_fitting?tube_use%5B0%5D=3&tube_use%5Boperation%5D=union"
					},
					waterAndGasPipes: {
						ruName: "Трубы водогазопроводные",
						path: "/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union"
					}
				}
			},
			doorsAndWindows: {
				ruName: "Двери, окна",
				subCategories: {
					metalDoors: {
						ruName: "Металлические двери",
						path: "/steeldoor"
					},
					interiorDoors: {
						ruName: "Межкомнатные двери",
						path: "/interiordoor"
					},
					pvcWindows: {
						ruName: "Окна ПВХ",
						path: "/vynilwindows"
					}
				}
			},
			pneumaticTools: {
				ruName: "Пневмоинструменты",
				subCategories: {
					compressors: {
						ruName: "Компрессоры",
						path: "/compressor"
					},
					sprayGuns: {
						ruName: "Краскопульты",
						path: "/spraygun"
					},
					wrenches: {
						ruName: "Гайковерты",
						path: "/wrench"
					},
					nailers: {
						ruName: "Скобозабиватели, гвоздезабиватели, степлеры",
						path: "/nailer"
					},
					pneumaticGrinders: {
						ruName: "Пневмошлифмашины",
						path: "/pneumogrinder"
					}
				}
			},
			machines: {
				ruName: "Станки",
				subCategories: {
					woodworkingMachinery: {
						ruName: "Деревообрабатывающие станки",
						path: "/woodworking"
					},
					metalworkingMachinery: {
						ruName: "Металлообрабатывающие станки",
						path: "/metalworking"
					},
					tileCutterMachinery: {
						ruName: "Плиткорезные станки",
						path: "/tilecutter?tc_type[0]=tool&tc_type[operation]=union"
					},
					sharpeningMachines: {
						ruName: "Заточные станки (точила)",
						path: "/benchgrinder"
					}
				}
			},
			buildingAndFinishingMaterials: {
				ruName: "Строительные и отделочные материалы",
				subCategories: {
					buildingMaterials: {
						ruName: "Общестроительные материалы",
						path: "/buildingmaterial"
					},
					plaster: {
						ruName: "Штукатурка",
						path: "/plaster"
					},
					adhesiveMixtures: {
						ruName: "Клеевые смеси",
						path: "/adhesivemix"
					},
					floorMixtures: {
						ruName: "Смеси для полов",
						path: "/floormix"
					},
					putty: {
						ruName: "Шпатлевка",
						path: "/putty"
					},
					primer: {
						ruName: "Грунтовка",
						path: "/primer"
					},
					drywall: {
						ruName: "Гипсокартон",
						path: "/drywall"
					},
					wallPanels: {
						ruName: "Стеновые панели",
						path: "/wall_panels"
					},
					ceramicTile: {
						ruName: "Керамическая плитка, керамогранит",
						path: "/tile?t_tile%5B0%5D=ceramic&t_tile%5B1%5D=granite&t_tile%5B2%5D=clinker&t_tile%5Boperation%5D=union"
					},
					decorativeStone: {
						ruName: "Декоративный камень и кирпич",
						path: "/decorative_stone"
					},
					flexibleStone: {
						ruName: "Гибкий камень",
						path: "/decorative_stone?gibkij-kamen"
					},
					paintsAndEnamels: {
						ruName: "Краски и эмали",
						path: "/paints"
					},
					lacquer: {
						ruName: "Лаки, пропитки, антисептики",
						path: "/lacquer"
					},
					roofingMaterials: {
						ruName: "Кровельные материалы",
						path: "/roof"
					},
					bricks: {
						ruName: "Кирпич",
						path: "/bricks"
					},
					cement: {
						ruName: "Цемент",
						path: "/caementum"
					},
					pavingSlabs: {
						ruName: "Тротуарная плитка",
						path: "/pavers"
					},
					pipeMetalRolling: {
						ruName: "Трубный металлопрокат",
						path: "/metal_pipes"
					},
					sheetMetalRolling: {
						ruName: "Листовой металлопрокат",
						path: "/sheetmetal"
					},
					fittings: {
						ruName: "Арматура",
						path: "/armatura"
					},
					constructionNets: {
						ruName: "Строительные сетки",
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
						path: "https://catalog.onliner.by/faucet"
					},
					bathtubs: {
						ruName: "Ванны",
						path: "https://catalog.onliner.by/bathtub"
					},
					waterHeaters: {
						ruName: "Водонагреватели",
						path: "https://catalog.onliner.by/waterheater"
					},
					towelWarmers: {
						ruName: "Полотенцесушители",
						path: "https://catalog.onliner.by/towelrail"
					},
					showerCabins: {
						ruName: "Душевые кабины",
						path: "https://catalog.onliner.by/showerbox"
					},
					pans: {
						ruName: "Унитазы",
						path: "https://catalog.onliner.by/wcpan"
					},
					washbasins: {
						ruName: "Умывальники",
						path: "https://catalog.onliner.by/washbasin"
					},
					pedestalForWashbasins: {
						ruName: "Пьедесталы для умывальников",
						path: "https://catalog.onliner.by/pedestal"
					},
					siphons: {
						ruName: "Сифоны",
						path: "https://catalog.onliner.by/siphon"
					},
					tileForBathrooms: {
						ruName: "Плитка для ванных комнат",
						path: "https://catalog.onliner.by/tile?t_appointment[0]=bathroom&t_appointment[operation]=union"
					},
					furnitureForBathrooms: {
						ruName: "Мебель для ванных комнат",
						path: "https://catalog.onliner.by/bath_furniture"
					},
					bidets: {
						ruName: "Биде",
						path: "https://catalog.onliner.by/bidet"
					},
					installationsForPansSinksBidets: {
						ruName: "Инсталляции для унитазов, раковин, биде и писсуаров",
						path: "https://catalog.onliner.by/installations"
					},
					flushingSystems: {
						ruName: "Клавиши и системы смыва",
						path: "https://catalog.onliner.by/flushing_system"
					},
					electronicBidetCovers: {
						ruName: "Электронные крышки-биде",
						path: "https://catalog.onliner.by/toilet_shower"
					},
					showerPanels: {
						ruName: "Душевые панели и гарнитуры",
						path: "https://catalog.onliner.by/shower"
					},
					showerTrays: {
						ruName: "Душевые поддоны",
						path: "https://catalog.onliner.by/shower_trays"
					},
					exhaustFans: {
						ruName: "Вытяжные вентиляторы",
						path: "https://catalog.onliner.by/exhaustfan?ef_useage[0]=bathroom&ef_useage[operation]=union"
					},
					accessPanels: {
						ruName: "Сантехнические ревизионные люки",
						path: "https://catalog.onliner.by/access_panel"
					},
					dryClosets: {
						ruName: "Биотуалеты",
						path: "https://catalog.onliner.by/biotoilet"
					},
					laundryBaskets: {
						ruName: "Корзины для белья",
						path: "https://catalog.onliner.by/toystorage?ts_const%5B0%5D=basket&ts_const%5Boperation%5D=union&ts_purpos%5B0%5D=underwear&ts_purpos%5Boperation%5D=union"
					}
				}
			},
			kitchen: {
				ruName: "Кухня",
				subCategories: {
					kitchenSinks: {
						ruName: "Мойки",
						path: "https://catalog.onliner.by/kitchensink"
					},
					faucets: {
						ruName: "Смесители",
						path: "https://catalog.onliner.by/faucet"
					},
					ceramicTile: {
						ruName: "Керамическая плитка",
						path: "https://catalog.onliner.by/tile?t_appointment%5B0%5D=kitchen&t_appointment%5Boperation%5D=union"
					},
					foodWasteShredders: {
						ruName: "Измельчители пищевых отходов",
						path: "https://catalog.onliner.by/disposer"
					},

					filtersAndWaterTreatmentSystems: {
						ruName: "Фильтры и системы очистки воды",
						path: "https://catalog.onliner.by/waterfilter"
					},
					exhaustFans: {
						ruName: "Вытяжные вентиляторы",
						path: "https://catalog.onliner.by/exhaustfan?ef_useage%5B0%5D=bathroom&ef_useage%5Boperation%5D=union"
					}
				}
			},
			waterSupplyAndHeating: {
				ruName: "Водоснабжение, отопление",
				subCategories: {
					pumps: {
						ruName: "Насосы",
						path: "https://catalog.onliner.by/pump"
					},
					waterHeaters: {
						ruName: "Водонагреватели",
						path: "https://catalog.onliner.by/waterheater"
					},
					boilers: {
						ruName: "отопительные котлы",
						path: "https://catalog.onliner.by/boiler"
					},
					filtersAndWaterTreatmentSystems: {
						ruName: "Фильтры и системы очистки воды",
						path: "https://catalog.onliner.by/waterfilter"
					},
					radiators: {
						ruName: "Радиаторы отопления",
						path: "https://catalog.onliner.by/radiators"
					},
					fireplaces: {
						ruName: "Дровяные камины, печи-камины, порталы",
						path: "https://catalog.onliner.by/stove"
					},
					heaters: {
						ruName: "Обогреватели",
						path: "https://catalog.onliner.by/heater"
					},
					heatGuns: {
						ruName: "Тепловые пушки",
						path: "https://catalog.onliner.by/heat_gun"
					},
					electricFireplaces: {
						ruName: "электрокамины и биокамины",
						path: "https://catalog.onliner.by/electrofireplace"
					},
					waterAccumulators: {
						ruName: "Гидроаккумуляторы и расширительные баки",
						path: "https://catalog.onliner.by/hydroaccum"
					},
					motorPumps: {
						ruName: "Мотопомпы",
						path: "https://catalog.onliner.by/motopump"
					},
					pipesAndFittings: {
						ruName: "Трубы, фитинг",
						path: "https://catalog.onliner.by/tube_fitting"
					},
					waterAndGasPipes: {
						ruName: "Трубы водогазопроводные",
						path: "https://catalog.onliner.by/metal_pipes?pipe_type_1%5B0%5D=watergas&pipe_type_1%5Boperation%5D=union"
					}
				}
			},
			furniture: {
				ruName: "Мебель для дома",
				subCategories: {
					officeArmchairsAndChairs: {
						ruName: "Офисные кресла и стулья",
						path: "https://catalog.onliner.by/office_chair?asgmt%5B0%5D=visitor&asgmt%5B1%5D=staff&asgmt%5B2%5D=boss&asgmt%5Boperation%5D=union"
					},
					gamingChairs: {
						ruName: "Геймерские кресла",
						path: "https://catalog.onliner.by/office_chair?asgmt%5B0%5D=game&asgmt%5Boperation%5D=union"
					},
					sofas: {
						ruName: "Диваны",
						path: "https://catalog.onliner.by/divan"
					},
					tables: {
						ruName: "Столы",
						path: "https://catalog.onliner.by/table"
					},
					chairsForKitchenAndBar: {
						ruName: "Стулья для кухни и бара",
						path: "https://catalog.onliner.by/chair"
					},
					armchairs: {
						ruName: "Кресла",
						path: "https://catalog.onliner.by/interior_chair"
					},
					beds: {
						ruName: "Кровати",
						path: "https://catalog.onliner.by/bed"
					},
					furnitureForBathrooms: {
						ruName: "Мебель ля ванных комнат",
						path: "https://catalog.onliner.by/bath_furniture"
					},
					cots: {
						ruName: "Детские кроватки",
						path: "https://catalog.onliner.by/babycotbed"
					},
					childrenTablesAndSchoolDesks: {
						ruName: "Детские столы и парты",
						path: "https://catalog.onliner.by/kidsdesk"
					},
					childrenDressers: {
						ruName: "Детские комоды",
						path: "https://catalog.onliner.by/babydresser"
					},
					boxesBasketsOrganizers: {
						ruName: "Ящики, корзины, органайзеры",
						path: "https://catalog.onliner.by/toystorage"
					},
					inflatableFurniture: {
						ruName: "Надувная мебель",
						path: "https://catalog.onliner.by/airbed"
					},

					framelessFurniture: {
						ruName: "Бескаркасная мебель",
						path: "https://catalog.onliner.by/beanbag"
					},
					bedBases: {
						ruName: "Основания для кроватей",
						path: "https://catalog.onliner.by/orthobase"
					},
					massagersAndMassageChairs: {
						ruName: "Массажеры и массажные кресла",
						path: "https://catalog.onliner.by/massagechair"
					}
				}
			},
			bedroom: {
				ruName: "Товары для спальни и домашний текстиль",
				subCategories: {
					mattresses: {
						ruName: "Матрасы",
						path: "https://catalog.onliner.by/mattress"
					},
					orthopedicPillows: {
						ruName: "Ортопедические подушки",
						path: "https://catalog.onliner.by/pillow"
					},
					classicPillows: {
						ruName: "Классические подушки для сна",
						path: "https://catalog.onliner.by/pillows?pil_type%5B0%5D=sleep&pil_type%5Boperation%5D=union&order=price:asc"
					},
					blankets: {
						ruName: "Одеяла",
						path: "https://catalog.onliner.by/pillows?pil_type%5B0%5D=blanket&pil_type%5Boperation%5D=union"
					},
					plaids: {
						ruName: "Пледы, покрывала",
						path: "https://catalog.onliner.by/plaid"
					},
					bedlinen: {
						ruName: "Постельное белье",
						path: "https://catalog.onliner.by/bedlinen"
					},
					mattressPads: {
						ruName: "Наматрасники",
						path: "https://catalog.onliner.by/mattresspad"
					},
					electricLinen: {
						ruName: "Электрогрелки, электроодеяла, электропростыни",
						path: "https://catalog.onliner.by/mobile_heater"
					},
					maternityPillows: {
						ruName: "Подушки для беременных",
						path: "https://catalog.onliner.by/pillows?pil_type%5B0%5D=forpregnantwom&pil_type%5Boperation%5D=union"
					},
					decorativePillows: {
						ruName: "Декоративные подушки",
						path: "https://catalog.onliner.by/pillows?pil_type%5B0%5D=decor&pil_type%5Boperation%5D=union"
					}
				}
			},
			gardenToolsAndMachines: {
				ruName: "Садовая техника и инструменты",
				subCategories: {
					miniTractors: {
						ruName: "Мини-тракторы",
						path: "https://catalog.onliner.by/minitractor"
					},
					motorBlocks: {
						ruName: "Мотоблоки и мультикультиваторы",
						path: "https://catalog.onliner.by/motoblock"
					},
					attachmentsForGardenEquipment: {
						ruName: "Навесное оборудование для садовой техники",
						path: "https://catalog.onliner.by/attachmentgarden"
					},
					engines: {
						ruName: "Двигатели",
						path: "https://catalog.onliner.by/engine"
					},
					trimmers: {
						ruName: "Триммеры",
						path: "https://catalog.onliner.by/trimmers"
					},
					mowers: {
						ruName: "Газонокосилки",
						path: "https://catalog.onliner.by/mowers"
					},
					toolsAccumulators: {
						ruName: "Аккумуляторы и зарядные устройства для инструмента",
						path: "https://catalog.onliner.by/tools_accum"
					},
					aerators: {
						ruName: "Аэраторы, скарификаторы",
						path: "https://catalog.onliner.by/mowers?type_mowing%5B0%5D=scarifier&type_mowing%5B1%5D=aerator&type_mowing%5B2%5D=scarifieraera&type_mowing%5Boperation%5D=union"
					},
					chainSaws: {
						ruName: "Цепные пилы",
						path: "https://catalog.onliner.by/chainsaw"
					},
					householdVacuumCleaners: {
						ruName: "Хозяйственные пылесосы",
						path: "https://catalog.onliner.by/vacuumcleaner?vc_type%5B0%5D=wetdryvc&vc_type%5Boperation%5D=union"
					},
					logSplitters: {
						ruName: "Дровоколы",
						path: "https://catalog.onliner.by/logsplitter"
					},
					pressureWashers: {
						ruName: "Мойки высокого давления",
						path: "https://catalog.onliner.by/washers"
					},
					hedgeTrimmers: {
						ruName: "Кусторезы и высоторезы",
						path: "https://catalog.onliner.by/hedgetrimmers"
					},
					gardenShredders: {
						ruName: "Садовые измельчители",
						path: "https://catalog.onliner.by/gardenshredder"
					},
					snowBlowers: {
						ruName: "Снегоуборщики",
						path: "https://catalog.onliner.by/snowblower"
					},
					leafBlowers: {
						ruName: "Воздуходувки",
						path: "https://catalog.onliner.by/leafblower"
					},
					gardenTools: {
						ruName: "Садовый инструмент",
						path: "https://catalog.onliner.by/gardentool"
					},
					wateringHoses: {
						ruName: "Поливочные шланги",
						path: "https://catalog.onliner.by/garden_hose"
					},
					automaticWateringSystems: {
						ruName: "Системы автоматического полива, распылители",
						path: "https://catalog.onliner.by/watering_system"
					},
					gardenBarrows: {
						ruName: "Садовые тачки",
						path: "https://catalog.onliner.by/barrow"
					},
					stairsAndLadders: {
						ruName: "Лестницы и стремянки",
						path: "https://catalog.onliner.by/stairandladder"
					}
				}
			},
			dacha: {
				ruName: "Отдых на даче",
				subCategories: {
					baths: {
						ruName: "Бани, купели",
						path: "https://catalog.onliner.by/bath"
					},
					gazeboses: {
						ruName: "Беседки",
						path: "https://catalog.onliner.by/garden_house"
					},
					pools: {
						ruName: "Бассейны",
						path: "https://catalog.onliner.by/pool"
					},
					grills: {
						ruName: "Мангалы, грили, барбекю",
						path: "https://catalog.onliner.by/grill"
					},
					bbqFacilities: {
						ruName: "Принадлежности для барбекю, грилей, мангалов",
						path: "https://catalog.onliner.by/bbq_accessories"
					},
					bathStoves: {
						ruName: "Банные печи",
						path: "https://catalog.onliner.by/bathstove"
					},
					childrenStreetComplexesAndHills: {
						ruName: "Детские уличные комплексы и горки",
						path: "https://catalog.onliner.by/kidwallbars?kwb_type[0]=outdoor&kwb_type[operation]=union"
					},
					gardenSwing: {
						ruName: "Садовые качели",
						path: "https://catalog.onliner.by/gardenswing"
					},
					trampolines: {
						ruName: "Батуты",
						path: "https://catalog.onliner.by/trampoline"
					},
					gardenFurniture: {
						ruName: "Садовая мебель",
						path: "https://catalog.onliner.by/gardenfurniture"
					},
					hammocks: {
						ruName: "Гамаки",
						path: "https://catalog.onliner.by/hammock"
					},
					tents: {
						ruName: "Шатры, тенты",
						path: "https://catalog.onliner.by/canopy_tents"
					},
					loungers: {
						ruName: "Шезлонги",
						path: "https://catalog.onliner.by/lounger"
					},
					streetUmbrellas: {
						ruName: "Зонты садовые, пляжные",
						path: "https://catalog.onliner.by/street_umbrella"
					}
				}
			},
			siteArrangement: {
				ruName: "Обустройство участка",
				subCategories: {
					houses: {
						ruName: "Дома, коттеджи",
						path: "https://catalog.onliner.by/house"
					},
					gazeboses: {
						ruName: "Беседки",
						path: "https://catalog.onliner.by/garden_house"
					},
					gardenCabins: {
						ruName: "Дачные бытовки и хозблоки",
						path: "https://catalog.onliner.by/garden_cabin"
					},
					streetLightning: {
						ruName: "Уличное освещение",
						path: "https://catalog.onliner.by/luster?lu_arrangement%5B0%5D=street&lu_arrangement%5Boperation%5D=union"
					},
					streetClothesDryers: {
						ruName: "Уличные сушки для белья",
						path: "https://catalog.onliner.by/linendryer?dr_mounting[0]=ground&dr_mounting[operation]=union"
					},
					insectKillers: {
						ruName: "Уничтожители насекомых",
						path: "https://catalog.onliner.by/insect_killer"
					},
					summerShowers: {
						ruName: "Летние души",
						path: "https://catalog.onliner.by/summer_shower"
					},
					countryToilets: {
						ruName: "Дачные туалеты",
						path: "https://catalog.onliner.by/outdoor_toilet"
					},
					dryClosets: {
						ruName: "Биотуалеты",
						path: "https://catalog.onliner.by/biotoilet"
					},
					meansForDryClosets: {
						ruName: "Средства для биотуалетов, выгребных ям",
						path: "https://catalog.onliner.by/wc_liquid"
					},
					brickTile: {
						ruName: "Клинкерная плитка",
						path: "https://catalog.onliner.by/tile?t_tile%5B0%5D=clinker&t_tile%5Boperation%5D=union"
					},
					pavingSlabs: {
						ruName: "Тротуарная плитка",
						path: "https://catalog.onliner.by/pavers"
					},
					plantersAndPotsForPlants: {
						ruName: "Кашпо, горшки для растений",
						path: "https://catalog.onliner.by/flowerpot"
					},
					rabitz: {
						ruName: "Сетка-рабица",
						path: "https://catalog.onliner.by/rabitz?mfr[0]=setkarabitza"
					}
				}
			},
			decorAndInterior: {
				ruName: "Декор и интерьер",
				subCategories: {
					interiorClocks: {
						ruName: "Интерьерные часы",
						path: "https://catalog.onliner.by/interior_clock"
					},
					nightLights: {
						ruName: "Ночники",
						path: "https://catalog.onliner.by/luster?lu_type%5B0%5D=nightlight&lu_type%5Boperation%5D=union"
					},
					floorLamps: {
						ruName: "Торшеры",
						path: "https://catalog.onliner.by/luster?lu_type%5B0%5D=floorlamp&lu_type%5Boperation%5D=union"
					},
					meteoStations: {
						ruName: "Метеостанции",
						path: "https://catalog.onliner.by/meteostations"
					},
					electricFireplaces: {
						ruName: "Электрокамины и биокамины",
						path: "https://catalog.onliner.by/electrofireplace"
					},
					decorativePillows: {
						ruName: "Декоративные подушки",
						path: "https://catalog.onliner.by/pillows?pil_type%5B0%5D=decor&pil_type%5Boperation%5D=union"
					},
					houseplants: {
						ruName: "Комнатные растения, флорариумы",
						path: "https://catalog.onliner.by/houseplant"
					}
				}
			},
			lightningAndPowerSupply: {
				ruName: "Освещение и электропитание",
				subCategories: {
					chandeliersAndLamps: {
						ruName: "Люстры и светильники",
						path: "https://catalog.onliner.by/luster"
					},
					tableLamps: {
						ruName: "Настольные лампы",
						path: "https://catalog.onliner.by/luster?lu_type%5B0%5D=light&lu_type%5Boperation%5D=union&lu_arrangement%5B0%5D=table&lu_arrangement%5Boperation%5D=union"
					},
					floorLamps: {
						ruName: "Торшеры",
						path: "https://catalog.onliner.by/luster?lu_type%5B0%5D=floorlamp&lu_type%5Boperation%5D=union"
					},
					nightLights: {
						ruName: "Ночники",
						path: "https://catalog.onliner.by/luster?lu_type%5B0%5D=nightlight&lu_type%5Boperation%5D=union"
					},
					streetLightning: {
						ruName: "Уличное освещение",
						path: "https://catalog.onliner.by/luster?lu_arrangement%5B0%5D=street&lu_arrangement%5Boperation%5D=union"
					},
					bulbs: {
						ruName: "Лампочки",
						path: "https://catalog.onliner.by/lightbulb"
					},
					socketsAndSwitches: {
						ruName: "Розетки, выключатели",
						path: "https://catalog.onliner.by/wall_socket"
					},
					stabilizersAndSurgeProtectors: {
						ruName: "Стабилизаторы напряжения и сетевые фильтры",
						path: "https://catalog.onliner.by/voltageregulator?voltage_type[0]=stabilizer&voltage_type[operation]=union"
					},
					generators: {
						ruName: "Генераторы",
						path: "https://catalog.onliner.by/powerstations"
					}
				}
			},
			smartHouseAndSecurity: {
				ruName: "Умный дом и безопасность",
				subCategories: {
					smartHome: {
						ruName: "Умный дом",
						path: "https://catalog.onliner.by/smart_home"
					},
					smartThermostats: {
						ruName: "Умные терморегуляторы",
						path: "https://catalog.onliner.by/thermostat?smarthome=1"
					},
					smartBulbs: {
						ruName: "Умные лампочки",
						path: "https://catalog.onliner.by/lightbulb?lib_smartlight=1"
					},
					smartSockets: {
						ruName: "Умные розетки",
						path: "https://catalog.onliner.by/wall_socket?wallsoc_smart=1"
					},
					ipCameras: {
						ruName: "IP-камеры",
						path: "https://catalog.onliner.by/ipcamera"
					},
					videoDoorPhones: {
						ruName: "Видеодомофоны",
						path: "https://catalog.onliner.by/videodoorphone"
					},
					CCTV: {
						ruName: "Камеры CCTV",
						path: "https://catalog.onliner.by/cctvcamera"
					},
					DVRs: {
						ruName: "Видеорегистраторы",
						path: "https://catalog.onliner.by/dvr"
					},
					cameraTraps: {
						ruName: "Фотоловушки",
						path: "https://catalog.onliner.by/camera_traps"
					},
					metalDoors: {
						ruName: "Входные двери",
						path: "https://catalog.onliner.by/steeldoor"
					},
					extinguishers: {
						ruName: "Огнетушители",
						path: "https://catalog.onliner.by/extinguisher"
					}
				}
			},
			clothingCare: {
				ruName: "Уход за одеждой, стирка",
				subCategories: {
					linenDryers: {
						ruName: "Сушилки для белья",
						path: "https://catalog.onliner.by/linendryer"
					},
					ironingBoards: {
						ruName: "Гладильные доски",
						path: "https://catalog.onliner.by/ironingboard"
					},
					laundryAndCareProducts: {
						ruName: "Средства для стирки и ухода за бельем",
						path: "https://catalog.onliner.by/washingpowder"
					},
					dishwasherTools: {
						ruName: "Средства для посудомоечных машин",
						path: "https://catalog.onliner.by/dishwashertablet"
					}
				}
			},
			dishes: {
				ruName: "Посуда и продукты питания",
				subCategories: {
					pans: {
						ruName: "Сковороды",
						path: "https://catalog.onliner.by/pan"
					},
					stewpans: {
						ruName: "Сотейники",
						path: "https://catalog.onliner.by/pan?p_type[0]=saucepan&p_type[operation]=union"
					},
					saucepans: {
						ruName: "Кастрюли",
						path: "https://catalog.onliner.by/saucepan"
					},
					lids: {
						ruName: "Крышки для посуды",
						path: "https://catalog.onliner.by/lids"
					},
					kettles: {
						ruName: "Чайники",
						path: "https://catalog.onliner.by/kettles"
					},
					teapots: {
						ruName: "Заварочные чайники, кофеварки, френч-прессы",
						path: "https://catalog.onliner.by/teapot"
					},
					dishesSets: {
						ruName: "Сервизы и наборы столовой посуды",
						path: "https://catalog.onliner.by/dishset"
					},
					cutlery: {
						ruName: "Столовые приборы",
						path: "https://catalog.onliner.by/cutlery"
					},
					kitchenKnifesAndScissors: {
						ruName: "Кухонные ножи и ножницы",
						path: "https://catalog.onliner.by/kitchen_knife"
					},
					bakingDishesAndBakingSheets: {
						ruName: "Формы для выпечки, противни",
						path: "https://catalog.onliner.by/breadpan"
					},
					barAccessories: {
						ruName: "Аксессуары для бара",
						path: "https://catalog.onliner.by/bar_accessories"
					},
					thermosesAndThermomugs: {
						ruName: "Термосы, термокружки",
						path: "https://catalog.onliner.by/thermosbottle"
					},
					coffee: {
						ruName: "Кофе",
						path: "https://catalog.onliner.by/coffeejava"
					}
				}
			},
			celebrations: {
				ruName: "Праздники",
				subCategories: {
					flowersBouquets: {
						ruName: "Цветы, букеты",
						path: "https://catalog.onliner.by/flowersbouquets"
					},
					stuffedToys: {
						ruName: "Мягкие игрушки",
						path: "https://catalog.onliner.by/stuffedtoys"
					},
					xmasTrees: {
						ruName: "Елки",
						path: "https://catalog.onliner.by/tree"
					},
					xmasLights: {
						ruName: "Электрические гирлянды",
						path: "https://catalog.onliner.by/xmaslights"
					},
					xmaslightsTreesAndFigures: {
						ruName: "Световые деревья, фигуры",
						path: "https://catalog.onliner.by/xmaslights?xl_type[0]=2d&xl_type[1]=tree&xl_type[2]=3d&xl_type[operation]=union"
					},
					xmasToysAndDecorations: {
						ruName: "Елочные игрушки, украшения",
						path: "https://catalog.onliner.by/christmasdecor"
					}
				}
			},
			petSupplies: {
				ruName: "Зоотовары",
				subCategories: {
					dogFood: {
						ruName: "Корма для собак",
						path: "https://catalog.onliner.by/foodfordog"
					},
					catFood: {
						ruName: "Корма для кошек",
						path: "https://catalog.onliner.by/catfood"
					},
					animalPlates: {
						ruName: "Миски, поилки, кормушки для животных",
						path: "https://catalog.onliner.by/animal_plate"
					},
					toiletsFillers: {
						ruName: "Наполнители для туалетов",
						path: "https://catalog.onliner.by/catlitter?catlit_typ%5B0%5D=type6&catlit_typ%5Boperation%5D=union"
					},
					toiletsForAnimals: {
						ruName: "Туалеты",
						path: "https://catalog.onliner.by/catlitter?catlit_typ%5B0%5D=type1&catlit_typ%5B1%5D=type2&catlit_typ%5Boperation%5D=union"
					},
					bagsForAnimals: {
						ruName: "Сумки, переноски для животных",
						path: "https://catalog.onliner.by/pet_carrier"
					},
					loungersForAnimals: {
						ruName: "Лежанки, домики, когтеточки для кошек и собак",
						path: "https://catalog.onliner.by/pet_house"
					}
				}
			},
			plantGrowing: {
				ruName: "Растениеводство",
				subCategories: {
					gardenTools: {
						ruName: "Садовый инструмент",
						path: "https://catalog.onliner.by/gardentool"
					},
					greenhousesAndHotbeds: {
						ruName: "Теплицы и парники",
						path: "https://catalog.onliner.by/greenhouse"
					},
					polycarbonateForGreenhouses: {
						ruName: "Поликарбонат для теплиц",
						path: "https://catalog.onliner.by/polycarbonate"
					},
					coveringMaterials: {
						ruName: "Укрывной материал",
						path: "https://catalog.onliner.by/coveringmaterial"
					},
					wateringHoses: {
						ruName: "Поливочные шланги",
						path: "https://catalog.onliner.by/garden_hose"
					},
					automaticWateringSystems: {
						ruName: "Системы автоматического полива, распылители",
						path: "https://catalog.onliner.by/watering_system"
					},
					houseplants: {
						ruName: "Комнатные растения, флорариумы",
						path: "https://catalog.onliner.by/houseplant"
					},
					plantersAndPotsForPlants: {
						ruName: "Кашпо, горшки для растений",
						path: "https://catalog.onliner.by/flowerpot"
					},
					grassSeedsAndLawn: {
						ruName: "Семена трав, газон",
						path: "https://catalog.onliner.by/lawn"
					},
					soilForPlants: {
						ruName: "Грунты для растений",
						path: "https://catalog.onliner.by/soilforplants"
					},
					fertilizers: {
						ruName: "Удобрения",
						path: "https://catalog.onliner.by/fertilizer"
					},
					saplingsOfFruitTreesAndBushes: {
						ruName: "Саженцы плодовых деревьев и кустарников",
						path: "https://catalog.onliner.by/shrubtree?fs_vid%5B0%5D=plod&fs_vid%5Boperation%5D=union"
					},
					saplingsOfDecorativeBushes: {
						ruName: "Саженцы декоративных кустарников",
						path: "https://catalog.onliner.by/shrubtree?fs_type%5B0%5D=shrub&fs_type%5Boperation%5D=union&fs_vid%5B0%5D=dekor&fs_vid%5Boperation%5D=union"
					},
					saplingsOfConiferousBushes: {
						ruName: "Саженцы хвойных растений",
						path: "https://catalog.onliner.by/shrubtree?fs_appearance%5B0%5D=coniferous&fs_appearance%5Boperation%5D=union"
					},
					flowerSeeds: {
						ruName: "Семена цветов",
						path: "https://catalog.onliner.by/flowersseed?vs_reproduction%5B0%5D=seed&vs_reproduction%5Boperation%5D=union"
					},
					flowerBulbs: {
						ruName: "Луковицы цветов",
						path: "https://catalog.onliner.by/flowersseed?vs_reproduction%5B0%5D=bulbs&vs_reproduction%5Boperation%5D=union"
					},
					seedsOfVegetablesHerbsAndBerries: {
						ruName: "Семена овощей, зелени и ягод",
						path: "https://catalog.onliner.by/vegetableseed"
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
						path: "/tires"
					},
					motorOil: {
						ruName: "Моторные масла",
						path: "/motor_oil"
					},
					carBatteries: {
						ruName: "Аккумуляторы",
						path: "/carbattery"
					},
					wheels: {
						ruName: "Диски",
						path: "/wheel"
					},
					gearOil: {
						ruName: "Трансмиссионные масла",
						path: "/gearoil"
					},
					carBulbs: {
						ruName: "Лампы",
						path: "/autolamps"
					},
					coolants: {
						ruName: "Охлаждающие жидкости",
						path: "/antifreeze"
					},
					additives: {
						ruName: "Присадки",
						path: "/additive4fuel"
					},
					glassWasherFluids: {
						ruName: "Стеклоомывающие жидкости",
						path: "/washerfluid"
					},
					brakeFluids: {
						ruName: "Тормозные жидкости",
						path: "/brakefluid"
					},
					xenon: {
						ruName: "Ксенон",
						path: "/xenon"
					},
					motorBatteries: {
						ruName: "Мотоциклетные аккумуляторы",
						path: "/motobatteries"
					},
					enginePreheaters: {
						ruName: "Предпусковые подогреватели двигателя и топливной системы",
						path: "/dieselfuelheater"
					}
				}
			},
			carElectronics: {
				ruName: "Автоэлектроника",
				subCategories: {
					DVRs: {
						ruName: "Видеорегистраторы",
						path: "/videoregistrator"
					},
					radioAndHeadSystems: {
						ruName: "Магнитолы и головные системы",
						path: "/caraudio"
					},
					carSpeakers: {
						ruName: "Акустика",
						path: "/carspeakers"
					},
					radarDetectors: {
						ruName: "Радар-детекторы",
						path: "/radar"
					},
					gpsNavigators: {
						ruName: "GPS-навигаторы",
						path: "/gps"
					},
					carAlarm: {
						ruName: "Сигнализация",
						path: "/caralarm"
					},
					carAmplifiers: {
						ruName: "Усилители",
						path: "/caramps"
					},
					cbRadioStations: {
						ruName: "Радиостанции CB",
						path: "/car_radio"
					},
					speakerphones: {
						ruName: "Громкая связь",
						path: "/carkit"
					},
					fmModulators: {
						ruName: "FM-модуляторы",
						path: "/fmmodulators"
					},
					carInverters: {
						ruName: "Автомобильные инверторы",
						path: "/car_inverter"
					},
					parkingRadar: {
						ruName: "Парковочные радары",
						path: "/parkingradar"
					},
					gpsTrackers: {
						ruName: "GPS-трекеры",
						path: "/gps_tracker"
					},
					carAntennas: {
						ruName: "Автомобильные антенны",
						path: "/antenforradio"
					},
					carVideoPlayers: {
						ruName: "Автомобильные видеоплееры и DVD",
						path: "/portabletvdvd"
					}
				}
			},
			repairAndWashingEquipment: {
				ruName: "Оборудование для ремонта и мойки",
				subCategories: {
					welders: {
						ruName: "Сварочные аппараты",
						path: "/weldinginverter"
					},
					toolKits: {
						ruName: "Наборы инструментов",
						path: "/tool_kits"
					},
					torqueWrenchesAndScrewdrivers: {
						ruName: "Динамометрические ключи и отвертки",
						path: "/torque_wrenches"
					},
					multimeters: {
						ruName: "Мультиметры, токовые клещи, индикаторные отвертки",
						path: "/multimeter"
					},
					compressors: {
						ruName: "Компрессоры",
						path: "/compressor"
					},
					pressureWashers: {
						ruName: "Мойки высокого давления",
						path: "/washers"
					},
					pneumaticSprayGuns: {
						ruName: "Пневматические краскопульты",
						path: "/spraygun"
					},
					carjacks: {
						ruName: "Домкраты",
						path: "/carjack"
					},
					weldingMasks: {
						ruName: "Сварочные маски",
						path: "/weldingmask"
					},
					electricSprayGuns: {
						ruName: "Электрические краскопульты",
						path: "/electricspraygun"
					},
					pneumaticWrenches: {
						ruName: "Пневматические гайковерты",
						path: "/wrench"
					},
					grinders: {
						ruName: "Пневматические шлифмашины",
						path: "/pneumogrinder"
					},
					carLifts: {
						ruName: "Подъемники",
						path: "/carlift"
					}
				}
			},
			carAccessories: {
				ruName: "Аксессуары",
				subCategories: {
					toolKits: {
						ruName: "Наборы инструментов",
						path: "/tool_kits"
					},
					startChargers: {
						ruName: "Пускозарядные устройства",
						path: "/start_charge"
					},
					carRefrigerators: {
						ruName: "Автохолодильники, термобоксы, термосумки",
						path: "/arrefrigerator"
					},
					carCompressors: {
						ruName: "Автомобильные компрессоры",
						path: "/compressor_auto"
					},
					carHolders: {
						ruName: "Держатели для телефонов",
						path: "/carholder"
					},
					breathalyzers: {
						ruName: "Алкотестеры",
						path: "/breathalyzer"
					},
					bicycleRacks: {
						ruName: "Велобагажники",
						path: "/bicyclerack"
					},
					carVacuumCleaners: {
						ruName: "Автомобильные пылесосы",
						path: "/car_vacuum_clean"
					},
					carRoofRacks: {
						ruName: "Багажники на крышу",
						path: "/car_racks"
					},
					electricChargingStations: {
						ruName: "Электрические зарядные станции",
						path: "/charging_station"
					}
				}
			},
			autoAndMototechnics: {
				ruName: "Авто и мототехника",
				subCategories: {
					cars: {
						ruName: "Легковые автомобили",
						path: "/car"
					},
					miniTractors: {
						ruName: "Тракторы",
						path: "/minitractor"
					},
					motorcycles: {
						ruName: "Мотоциклы",
						path: "/motorcycle"
					},
					electricScooters: {
						ruName: "Электроскутеры",
						path: "/electric_scooter?ks_type%5B0%5D=scooter&ks_type%5Boperation%5D=union"
					},
					scooters: {
						ruName: "Скутеры и мопеды",
						path: "/scooter"
					},
					ATVs: {
						ruName: "Квадроциклы",
						path: "/quad"
					},
					motorHelmets: {
						ruName: "Мотошлемы",
						path: "/motohelmet"
					},
					motorBatteries: {
						ruName: "Мотоциклетные аккумуляторы",
						path: "/motobatteries"
					},
					motorcycleTires: {
						ruName: "Мотоциклетные шины",
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

				}
			},
			rollerSkatesSkateboards: {
				ruName: "Роликовые коньки, скейтборды, самокаты",
				subCategories: {

				}
			},
			watchBagsAccessories: {
				ruName: "Часы, сумки и прочие аксессуары",
				subCategories: {

				}
			},
			cosmeticPerfumeryAccessories: {
				ruName: "Косметика, парфюмерия, аксессуары",
				subCategories: {

				}
			},
			health: {
				ruName: "Здоровье",
				subCategories: {

				}
			},
			healthcareEquipment: {
				ruName: "Приборы по уходу за телом",
				subCategories: {

				}
			},
			hobby: {
				ruName: "Хобби",
				subCategories: {

				}
			},
			tourismAndCamping: {
				ruName: "Туризм и кемпинг",
				subCategories: {

				}
			},
			fishingAndWaterSport: {
				ruName: "Рыбалка, водный спорт",
				subCategories: {

				}
			},
			fitnessEquipment: {
				ruName: "Тренажеры, фитнес, единоборства",
				subCategories: {

				}
			},
			gameSports: {
				ruName: "Игровые виды спорта",
				subCategories: {

				}
			},
			winterSports: {
				ruName: "Зимние виды спорта",
				subCategories: {

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

				}
			},
			childrenTransport: {
				ruName: "Детский транспорт",
				subCategories: {

				}
			},
			childrenFurniture: {
				ruName: "Детская мебель",
				subCategories: {

				}
			},
			babySleep: {
				ruName: "Детский сон",
				subCategories: {

				}
			},
			boardAndEducationalGames: {
				ruName: "Настольные игры и развивающие игрушки",
				subCategories: {

				}
			},
			toysAndGames: {
				ruName: "Игрушки и игры",
				subCategories: {

				}
			},
			outdoorGamesAndSport: {
				ruName: "Игры на улице и спорт",
				subCategories: {

				}
			},
			newbornCare: {
				ruName: "Уход за новорожденными",
				subCategories: {

				}
			},
			goodsForSchool: {
				ruName: "Товары для школы",
				subCategories: {

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

				}
			},
			officeFurniture: {
				ruName: "Офисная мебель",
				subCategories: {

				}
			},
			tradeAndFinance: {
				ruName: "Торговля и финансы",
				subCategories: {

				}
			},
			publishingAndPrinting: {
				ruName: "Издательство и печать",
				subCategories: {

				}
			},
			hygieneAndNutrition: {
				ruName: "Гигиена и питание",
				subCategories: {

				}
			},
			CCTV: {
				ruName: "Видеонаблюдение",
				subCategories: {

				}
			},
			transportAndTransportation: {
				ruName: "Транспорт и перевозки",
				subCategories: {

				}
			},
			industryAndConstruction: {
				ruName: "Промышленность и строительство",
				subCategories: {

				}
			}
		}
	}
}
