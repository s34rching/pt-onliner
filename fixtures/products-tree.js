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

				}
			},
			builtInAppliances: {
				ruName: "Встраиваемая техника",
				subCategories: {

				}
			},
			cleaning: {
				ruName: "Уборка",
				subCategories: {

				}
			},
			clothesCare: {
				ruName: "Уход за одеждой, пошив",
				subCategories: {

				}
			},
			airConditioningEquipment: {
				ruName: "Климатическая техника",
				subCategories: {

				}
			},
			cooking: {
				ruName: "Приготовление пищи",
				subCategories: {

				}
			},
			teaAndCoffeePreparation: {
				ruName: "Приготовление кофе и чая",
				subCategories: {

				}
			},
			foodPreparation: {
				ruName: "Подготовка и обработка продуктов",
				subCategories: {

				}
			},
			bodyAndHairCare: {
				ruName: "Уход за волосами и телом",
				subCategories: {

				}
			},
			healthEquipment: {
				ruName: "Техника для здоровья",
				subCategories: {

				}
			},
			accessoriesAndPeripheral: {
				ruName: "Аксессуары и сопутствующие товары",
				subCategories: {

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

				}
			},
			buildingEquipment: {
				ruName: "Строительное оборудование",
				subCategories: {

				}
			},
			floorCoverings: {
				ruName: "Напольные покрытия",
				subCategories: {

				}
			},
			plumbing: {
				ruName: "Сантехника",
				subCategories: {

				}
			},
			waterSupplySewerageVentilation: {
				ruName: "Водоснабжение, канализация, вентиляция",
				subCategories: {

				}
			},
			powerSupply: {
				ruName: "Электроснабжение",
				subCategories: {

				}
			},
			heating: {
				ruName: "Отопление, теплоизоляция",
				subCategories: {

				}
			},
			doorsAndWindows: {
				ruName: "Двери, окна",
				subCategories: {

				}
			},
			pneumaticTools: {
				ruName: "Пневмоинструменты",
				subCategories: {

				}
			},
			machines: {
				ruName: "Станки",
				subCategories: {

				}
			},
			buildingAndFinishingMaterials: {
				ruName: "Строительные и отделочные материалы",
				subCategories: {

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

				}
			},
			kitchen: {
				ruName: "Кухня",
				subCategories: {

				}
			},
			waterSupplyAndHeating: {
				ruName: "Водоснабжение, отопление",
				subCategories: {

				}
			},
			furniture: {
				ruName: "Мебель для дома",
				subCategories: {

				}
			},
			bedroom: {
				ruName: "Товары для спальни и домашний текстиль",
				subCategories: {

				}
			},
			gardenToolsAndMachines: {
				ruName: "Садовая техника и инструменты",
				subCategories: {

				}
			},
			dacha: {
				ruName: "Отдых на даче",
				subCategories: {

				}
			},
			siteArrangement: {
				ruName: "Обустройство участка",
				subCategories: {

				}
			},
			decorAndInterior: {
				ruName: "Декор и интерьер",
				subCategories: {

				}
			},
			lightningAndPowerSupply: {
				ruName: "Освещение и электропитание",
				subCategories: {

				}
			},
			smartHouseAndSecurity: {
				ruName: "Умный дом и безопасность",
				subCategories: {

				}
			},
			clothingCare: {
				ruName: "Уход за одеждой, стирка",
				subCategories: {

				}
			},
			dishes: {
				ruName: "Посуда и продукты питания",
				subCategories: {

				}
			},
			celebrations: {
				ruName: "Праздники",
				subCategories: {

				}
			},
			petSupplies: {
				ruName: "Зоотовары",
				subCategories: {

				}
			},
			plantGrowing: {
				ruName: "Растениеводство",
				subCategories: {

				}
			}
		}
	},
	carsAndCycles: {
		id: 6,
		ruName: "Авто и мото",
		categories: {
			sparePartsAndTechnicalFluids: {
				ruName: "Запчасти и технические жидкости",
				subCategories: {

				}
			},
			carElectronics: {
				ruName: "Автоэлектроника",
				subCategories: {

				}
			},
			repairAndWashingEquipment: {
				ruName: "Оборудование для ремонта и мойки",
				subCategories: {

				}
			},
			carAccessories: {
				ruName: "Аксессуары",
				subCategories: {

				}
			},
			autoAndMototechnics: {
				ruName: "Авто и мототехника",
				subCategories: {

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
