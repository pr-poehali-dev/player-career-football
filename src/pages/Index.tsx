import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const playerStats = {
    goals: 42,
    assists: 18,
    matches: 38,
    yellowCards: 3,
    redCards: 0,
    minutesPlayed: 3420
  };

  const careerHistory = [
    {
      id: 1,
      club: 'Реал Мадрид',
      period: '2021 - 2024',
      position: 'Нападающий',
      goals: 89,
      matches: 112,
      achievements: ['Лига Чемпионов', 'Ла Лига'],
      transferFee: '€120M',
      transferType: 'Покупка'
    },
    {
      id: 2,
      club: 'Манчестер Юнайтед',
      period: '2018 - 2021',
      position: 'Нападающий',
      goals: 67,
      matches: 95,
      achievements: ['Кубок Англии', 'Лига Европы'],
      transferFee: '€85M',
      transferType: 'Покупка'
    },
    {
      id: 3,
      club: 'Боруссия Дортмунд',
      period: '2015 - 2018',
      position: 'Нападающий',
      goals: 34,
      matches: 78,
      achievements: ['Кубок Германии'],
      transferFee: '€25M',
      transferType: 'Покупка'
    }
  ];

  const achievements = [
    { title: 'Золотой мяч', year: '2023', type: 'individual' },
    { title: 'Золотая бутса', year: '2023', type: 'individual' },
    { title: 'Лига Чемпионов', year: '2022, 2023', type: 'team' },
    { title: 'Ла Лига', year: '2022, 2023, 2024', type: 'team' },
    { title: 'Лучший бомбардир сезона', year: '2023', type: 'individual' }
  ];

  const stadiums = [
    {
      id: 1,
      name: 'Сантьяго Бернабеу',
      city: 'Мадрид',
      country: 'Испания',
      club: 'Реал Мадрид',
      capacity: 81044,
      matches: 67,
      goals: 45,
      coordinates: { lat: 40.4531, lng: -3.6883 },
      period: '2021-2024',
      memorable: 'Хет-трик в финале Лиги Чемпионов 2023'
    },
    {
      id: 2,
      name: 'Олд Траффорд',
      city: 'Манчестер',
      country: 'Англия',
      club: 'Манчестер Юнайтед',
      capacity: 74879,
      matches: 52,
      goals: 38,
      coordinates: { lat: 53.4631, lng: -2.2914 },
      period: '2018-2021',
      memorable: 'Первый гол в АПЛ в дебютном матче'
    },
    {
      id: 3,
      name: 'Сигнал Идуна Парк',
      city: 'Дортмунд',
      country: 'Германия',
      club: 'Боруссия Дортмунд',
      capacity: 81365,
      matches: 41,
      goals: 19,
      coordinates: { lat: 51.4927, lng: 7.4516 },
      period: '2015-2018',
      memorable: 'Дебютный гол в Бундеслиге'
    },
    {
      id: 4,
      name: 'Кемп Ноу',
      city: 'Барселона',
      country: 'Испания',
      club: 'Барселона',
      capacity: 99354,
      matches: 3,
      goals: 2,
      coordinates: { lat: 41.3809, lng: 2.1228 },
      period: 'Гостевые матчи',
      memorable: 'Победный гол в Эль Класико'
    },
    {
      id: 5,
      name: 'Уэмбли',
      city: 'Лондон',
      country: 'Англия',
      club: 'Сборная России',
      capacity: 90000,
      matches: 8,
      goals: 6,
      coordinates: { lat: 51.5560, lng: -0.2796 },
      period: '2019-2024',
      memorable: 'Хет-трик за сборную в полуфинале Евро'
    }
  ];

  const [selectedStadium, setSelectedStadium] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoFilter, setVideoFilter] = useState('all');

  const videos = [
    {
      id: 1,
      title: 'Хет-трик в финале Лиги Чемпионов',
      description: 'Три гола в финале против Ливерпуля, 2023',
      thumbnail: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      duration: '2:45',
      views: '2.1M',
      category: 'finals',
      club: 'Реал Мадрид',
      year: '2023',
      goals: 3,
      videoUrl: 'https://example.com/video1' // placeholder
    },
    {
      id: 2,
      title: 'Дебютный гол в АПЛ',
      description: 'Первый гол в английской премьер-лиге',
      thumbnail: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      duration: '1:20',
      views: '890K',
      category: 'debuts',
      club: 'Манчестер Юнайтед',
      year: '2018',
      goals: 1,
      videoUrl: 'https://example.com/video2'
    },
    {
      id: 3,
      title: 'Победный гол в Эль Класико',
      description: 'Решающий удар в ворота Барселоны на 89 минуте',
      thumbnail: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      duration: '1:15',
      views: '3.2M',
      category: 'classics',
      club: 'Реал Мадрид',
      year: '2022',
      goals: 1,
      videoUrl: 'https://example.com/video3'
    },
    {
      id: 4,
      title: 'Гол ножницами в Лиге Европы',
      description: 'Невероятный удар через себя против Севильи',
      thumbnail: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      duration: '0:45',
      views: '1.5M',
      category: 'skills',
      club: 'Манчестер Юнайтед',
      year: '2020',
      goals: 1,
      videoUrl: 'https://example.com/video4'
    },
    {
      id: 5,
      title: 'Хет-трик за сборную',
      description: 'Три гола в полуфинале Евро против Испании',
      thumbnail: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      duration: '3:10',
      views: '4.1M',
      category: 'national',
      club: 'Сборная России',
      year: '2021',
      goals: 3,
      videoUrl: 'https://example.com/video5'
    },
    {
      id: 6,
      title: 'Дальний удар с 30 метров',
      description: 'Потрясающий гол с центра поля',
      thumbnail: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      duration: '0:30',
      views: '2.8M',
      category: 'skills',
      club: 'Боруссия Дортмунд',
      year: '2017',
      goals: 1,
      videoUrl: 'https://example.com/video6'
    }
  ];

  const videoCategories = [
    { id: 'all', name: 'Все видео', icon: 'Play' },
    { id: 'finals', name: 'Финалы', icon: 'Trophy' },
    { id: 'classics', name: 'Эль Класико', icon: 'Flame' },
    { id: 'skills', name: 'Мастерство', icon: 'Star' },
    { id: 'debuts', name: 'Дебюты', icon: 'Calendar' },
    { id: 'national', name: 'Сборная', icon: 'Flag' }
  ];

  const filteredVideos = videoFilter === 'all' ? videos : videos.filter(v => v.category === videoFilter);

  const [selectedNews, setSelectedNews] = useState(null);
  const [newsFilter, setNewsFilter] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: 'Петров продлевает контракт с Реалом до 2026 года',
      summary: 'Российский нападающий подписал новое соглашение с мадридским клубом на рекордную сумму',
      content: 'Александр Петров официально продлил контракт с ФК "Реал Мадрид" до 2026 года. Новое соглашение сделает его одним из самых высокооплачиваемых игроков клуба...',
      author: 'Marca',
      date: '2024-01-15',
      category: 'transfers',
      readTime: '3 мин',
      image: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      tags: ['Реал Мадрид', 'Контракт', 'Трансферы']
    },
    {
      id: 2,
      title: 'Интервью: "Я мечтал играть за Реал с детства"',
      summary: 'Эксклюзивное интервью с Александром Петровым о карьере и планах на будущее',
      content: 'В откровенном интервью нападающий рассказал о своем пути от Дортмунда до Реала, о работе с тренерами и своих амбициях...',
      author: 'AS',
      date: '2024-01-10',
      category: 'interviews',
      readTime: '7 мин',
      image: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      tags: ['Интервью', 'Карьера', 'Мотивация']
    },
    {
      id: 3,
      title: 'Петров признан лучшим игроком месяца в Ла Лиге',
      summary: 'Российский форвард получил награду за выступления в декабре',
      content: 'За 5 матчей в декабре Александр забил 8 голов и отдал 3 передачи, что принесло ему титул лучшего игрока месяца...',
      author: 'ESPN',
      date: '2024-01-05',
      category: 'awards',
      readTime: '2 мин',
      image: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      tags: ['Награды', 'Ла Лига', 'Достижения']
    },
    {
      id: 4,
      title: 'Тренировочные секреты успеха Петрова',
      summary: 'Как российский нападающий поддерживает форму на высшем уровне',
      content: 'Специальная программа тренировок, питание и восстановление - раскрываем секреты физической подготовки звезды...',
      author: 'Goal.com',
      date: '2023-12-28',
      category: 'training',
      readTime: '5 мин',
      image: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      tags: ['Тренировки', 'Фитнес', 'Подготовка']
    },
    {
      id: 5,
      title: 'Петров о сборной России: "Готов играть до последнего"',
      summary: 'Капитан сборной рассказал о планах на предстоящие матчи',
      content: 'В интервью перед товарищескими матчами капитан сборной России поделился мыслями о команде и будущих турнирах...',
      author: 'Чемпионат',
      date: '2023-12-20',
      category: 'national',
      readTime: '4 мин',
      image: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      tags: ['Сборная России', 'Капитан', 'Интервью']
    },
    {
      id: 6,
      title: 'Благотворительный фонд Петрова помогает детским школам',
      summary: 'Футболист открыл новую программу поддержки юных спортсменов',
      content: 'Александр Петров запустил новую инициативу своего фонда, направленную на развитие детского футбола в России...',
      author: 'Спорт-Экспресс',
      date: '2023-12-15',
      category: 'charity',
      readTime: '3 мин',
      image: '/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg',
      tags: ['Благотворительность', 'Дети', 'Футбол']
    }
  ];

  const newsCategories = [
    { id: 'all', name: 'Все новости', icon: 'Newspaper' },
    { id: 'transfers', name: 'Трансферы', icon: 'ArrowRightLeft' },
    { id: 'interviews', name: 'Интервью', icon: 'Mic' },
    { id: 'awards', name: 'Награды', icon: 'Trophy' },
    { id: 'training', name: 'Тренировки', icon: 'Dumbbell' },
    { id: 'national', name: 'Сборная', icon: 'Flag' },
    { id: 'charity', name: 'Благотворительность', icon: 'Heart' }
  ];

  const filteredNews = newsFilter === 'all' ? newsArticles : newsArticles.filter(n => n.category === newsFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="bg-card border-b border-border/50 sticky top-0 z-50 backdrop-blur-md bg-card/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" className="h-8 w-8 text-accent" />
              <h1 className="text-2xl font-bold text-foreground">FootballCareer</h1>
            </div>
            <div className="flex space-x-6">
              <Button 
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('profile')}
                className="flex items-center space-x-2"
              >
                <Icon name="User" size={16} />
                <span>Профиль</span>
              </Button>
              <Button 
                variant={activeTab === 'stats' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('stats')}
                className="flex items-center space-x-2"
              >
                <Icon name="BarChart3" size={16} />
                <span>Статистика</span>
              </Button>
              <Button 
                variant={activeTab === 'history' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('history')}
                className="flex items-center space-x-2"
              >
                <Icon name="Clock" size={16} />
                <span>Карьера</span>
              </Button>
              <Button 
                variant={activeTab === 'achievements' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('achievements')}
                className="flex items-center space-x-2"
              >
                <Icon name="Award" size={16} />
                <span>Достижения</span>
              </Button>
              <Button 
                variant={activeTab === 'stadiums' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('stadiums')}
                className="flex items-center space-x-2"
              >
                <Icon name="MapPin" size={16} />
                <span>Стадионы</span>
              </Button>
              <Button 
                variant={activeTab === 'videos' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('videos')}
                className="flex items-center space-x-2"
              >
                <Icon name="Play" size={16} />
                <span>Видео</span>
              </Button>
              <Button 
                variant={activeTab === 'news' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('news')}
                className="flex items-center space-x-2"
              >
                <Icon name="Newspaper" size={16} />
                <span>Новости</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        {activeTab === 'profile' && (
          <div className="animate-fade-in space-y-8">
            {/* Hero Profile Card */}
            <Card className="overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="relative">
                    <img 
                      src="/img/6465ca4f-92b8-4def-8b97-f973a35253a7.jpg"
                      alt="Профиль игрока"
                      className="w-64 h-64 object-cover rounded-2xl shadow-2xl animate-scale-in"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg animate-pulse-glow">
                      <Icon name="Zap" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left space-y-4">
                    <div>
                      <h2 className="text-5xl font-bold text-foreground mb-2">Александр Петров</h2>
                      <p className="text-xl text-muted-foreground">Нападающий • Реал Мадрид</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        28 лет
                      </Badge>
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        <Icon name="MapPin" size={16} className="mr-2" />
                        Россия
                      </Badge>
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        <Icon name="Ruler" size={16} className="mr-2" />
                        185 см
                      </Badge>
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        <Icon name="Activity" size={16} className="mr-2" />
                        78 кг
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                      <div className="text-center p-4 bg-card rounded-lg border">
                        <div className="text-3xl font-bold text-primary">{playerStats.goals}</div>
                        <div className="text-sm text-muted-foreground">Голы</div>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border">
                        <div className="text-3xl font-bold text-secondary">{playerStats.assists}</div>
                        <div className="text-sm text-muted-foreground">Передачи</div>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border">
                        <div className="text-3xl font-bold text-accent">{playerStats.matches}</div>
                        <div className="text-sm text-muted-foreground">Матчи</div>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border">
                        <div className="text-3xl font-bold text-primary">9.2</div>
                        <div className="text-sm text-muted-foreground">Рейтинг</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Icon name="Target" className="h-5 w-5 text-primary" />
                    <span>Точность ударов</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>В створ</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Icon name="Zap" className="h-5 w-5 text-secondary" />
                    <span>Скорость</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Макс. скорость</span>
                      <span className="font-semibold">34.2 км/ч</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Icon name="Heart" className="h-5 w-5 text-accent" />
                    <span>Физическое состояние</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Готовность</span>
                      <span className="font-semibold">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Stats Section */}
        {activeTab === 'stats' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Статистика сезона 2023/24</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Target" className="h-6 w-6 text-primary" />
                    <span>Голы и передачи</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Голы</span>
                    <span className="text-2xl font-bold text-primary">{playerStats.goals}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Передачи</span>
                    <span className="text-2xl font-bold text-secondary">{playerStats.assists}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Г+П</span>
                    <span className="text-2xl font-bold text-accent">{playerStats.goals + playerStats.assists}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                    <span>Игровое время</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Матчи</span>
                    <span className="text-2xl font-bold">{playerStats.matches}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Минуты</span>
                    <span className="text-2xl font-bold">{playerStats.minutesPlayed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Среднее за матч</span>
                    <span className="text-lg font-semibold">{Math.round(playerStats.minutesPlayed / playerStats.matches)} мин</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="AlertTriangle" className="h-6 w-6 text-accent" />
                    <span>Дисциплина</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Жёлтые карточки</span>
                    <span className="text-2xl font-bold text-yellow-500">{playerStats.yellowCards}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Красные карточки</span>
                    <span className="text-2xl font-bold text-red-500">{playerStats.redCards}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Фолы за матч</span>
                    <span className="text-lg font-semibold">1.2</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Прогресс по месяцам</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Авг', 'Сен', 'Окт', 'Ноя', 'Дек', 'Янв', 'Фев', 'Мар', 'Апр', 'Май'].map((month, index) => {
                    const goals = Math.floor(Math.random() * 8) + 1;
                    return (
                      <div key={month} className="flex items-center space-x-4">
                        <span className="w-12 text-sm font-medium">{month}</span>
                        <div className="flex-1">
                          <Progress value={(goals / 8) * 100} className="h-3" />
                        </div>
                        <span className="w-8 text-sm font-bold">{goals}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Career History */}
        {activeTab === 'history' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">История карьеры</h2>
            
            <div className="space-y-6">
              {careerHistory.map((period, index) => (
                <Card key={period.id} className="hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <Icon name="Shield" className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{period.club}</h3>
                            <p className="text-muted-foreground">{period.period}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Icon name="MapPin" size={16} className="text-primary" />
                            <span className="text-sm">{period.position}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="TrendingUp" size={16} className="text-secondary" />
                            <span className="text-sm">{period.transferType}: {period.transferFee}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Статистика</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-muted rounded-lg">
                            <div className="text-2xl font-bold text-primary">{period.goals}</div>
                            <div className="text-xs text-muted-foreground">Голы</div>
                          </div>
                          <div className="text-center p-3 bg-muted rounded-lg">
                            <div className="text-2xl font-bold text-secondary">{period.matches}</div>
                            <div className="text-xs text-muted-foreground">Матчи</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Достижения</h4>
                        <div className="flex flex-wrap gap-2">
                          {period.achievements.map((achievement, idx) => (
                            <Badge key={idx} variant="outline" className="bg-accent/10">
                              <Icon name="Trophy" size={12} className="mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {activeTab === 'achievements' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Достижения и награды</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="User" className="h-6 w-6 text-accent" />
                    <span>Индивидуальные награды</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.filter(a => a.type === 'individual').map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Award" className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.year}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Users" className="h-6 w-6 text-primary" />
                    <span>Командные достижения</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.filter(a => a.type === 'team').map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Trophy" className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.year}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Карьерная статистика</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">190</div>
                    <div className="text-sm text-muted-foreground">Всего голов</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">85</div>
                    <div className="text-sm text-muted-foreground">Всего передач</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">285</div>
                    <div className="text-sm text-muted-foreground">Всего матчей</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Трофеев</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stadiums Section */}
        {activeTab === 'stadiums' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Карта стадионов</h2>
            
            {/* Interactive World Map */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Globe" className="h-6 w-6 text-primary" />
                  <span>Стадионы где я играл</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-blue-50 to-green-50 h-96 overflow-hidden">
                  <svg viewBox="0 0 1000 500" className="w-full h-full">
                    {/* Simplified world map background */}
                    <rect width="1000" height="500" fill="url(#worldGradient)" />
                    <defs>
                      <linearGradient id="worldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e0f2fe" />
                        <stop offset="100%" stopColor="#dcfce7" />
                      </linearGradient>
                    </defs>
                    
                    {/* Europe */}
                    <path d="M450 150 L550 140 L580 180 L520 220 L450 200 Z" fill="#10b981" opacity="0.3" />
                    {/* England */}
                    <path d="M480 160 L500 155 L505 175 L485 180 Z" fill="#10b981" opacity="0.5" />
                    {/* Spain */}
                    <path d="M450 200 L480 195 L485 210 L455 215 Z" fill="#10b981" opacity="0.5" />
                    {/* Germany */}
                    <path d="M510 170 L530 165 L535 185 L515 190 Z" fill="#10b981" opacity="0.5" />
                    
                    {/* Stadium markers */}
                    {stadiums.map((stadium, index) => {
                      const x = stadium.country === 'Испания' ? (stadium.city === 'Мадрид' ? 465 : 470) :
                               stadium.country === 'Англия' ? (stadium.city === 'Манчестер' ? 490 : 495) :
                               stadium.country === 'Германия' ? 520 : 465;
                      const y = stadium.country === 'Испания' ? (stadium.city === 'Мадрид' ? 205 : 210) :
                               stadium.country === 'Англия' ? (stadium.city === 'Манчестер' ? 165 : 175) :
                               stadium.country === 'Германия' ? 175 : 205;
                      
                      return (
                        <g key={stadium.id}>
                          <circle
                            cx={x}
                            cy={y}
                            r="8"
                            fill="#ff6b35"
                            stroke="#fff"
                            strokeWidth="2"
                            className="cursor-pointer hover:r-10 transition-all animate-pulse-glow"
                            onClick={() => setSelectedStadium(stadium)}
                          />
                          <text
                            x={x}
                            y={y - 12}
                            textAnchor="middle"
                            fontSize="10"
                            fill="#1a1a1a"
                            className="font-semibold"
                          >
                            {stadium.city}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                  
                  {/* Stadium detail popup */}
                  {selectedStadium && (
                    <div className="absolute top-4 right-4 bg-card border rounded-lg p-4 shadow-lg max-w-sm animate-scale-in">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg">{selectedStadium.name}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedStadium(null)}
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" size={14} className="text-primary" />
                          <span>{selectedStadium.city}, {selectedStadium.country}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Shield" size={14} className="text-secondary" />
                          <span>{selectedStadium.club}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Users" size={14} className="text-accent" />
                          <span>{selectedStadium.capacity.toLocaleString()} мест</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-3 p-2 bg-muted rounded">
                          <div className="text-center">
                            <div className="font-bold text-primary">{selectedStadium.matches}</div>
                            <div className="text-xs">Матчи</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-secondary">{selectedStadium.goals}</div>
                            <div className="text-xs">Голы</div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2 p-2 bg-accent/10 rounded">
                          <strong>Памятный момент:</strong><br />
                          {selectedStadium.memorable}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Stadium Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stadiums.map((stadium) => (
                <Card key={stadium.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => setSelectedStadium(stadium)}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{stadium.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{stadium.city}, {stadium.country}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={16} className="text-primary" />
                      <span className="text-sm font-medium">{stadium.club}</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-muted rounded">
                        <div className="font-bold text-primary">{stadium.matches}</div>
                        <div className="text-xs text-muted-foreground">Матчи</div>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <div className="font-bold text-secondary">{stadium.goals}</div>
                        <div className="text-xs text-muted-foreground">Голы</div>
                      </div>
                      <div className="p-2 bg-muted rounded">
                        <div className="font-bold text-accent">{(stadium.goals / stadium.matches).toFixed(1)}</div>
                        <div className="text-xs text-muted-foreground">Г/М</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Вместимость</span>
                        <span className="font-semibold">{stadium.capacity.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Период</span>
                        <span className="font-semibold">{stadium.period}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stadium Summary Stats */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Статистика по стадионам</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{stadiums.length}</div>
                    <div className="text-sm text-muted-foreground">Стадионов</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">{stadiums.reduce((sum, s) => sum + s.matches, 0)}</div>
                    <div className="text-sm text-muted-foreground">Всего матчей</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">{stadiums.reduce((sum, s) => sum + s.goals, 0)}</div>
                    <div className="text-sm text-muted-foreground">Всего голов</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">Страны</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Videos Section */}
        {activeTab === 'videos' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Лучшие голы и моменты</h2>
            
            {/* Video Categories Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Filter" className="h-6 w-6 text-primary" />
                  <span>Категории</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {videoCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={videoFilter === category.id ? 'default' : 'outline'}
                      onClick={() => setVideoFilter(category.id)}
                      className="flex items-center space-x-2"
                    >
                      <Icon name={category.icon} size={16} />
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-2">
                        {category.id === 'all' ? videos.length : videos.filter(v => v.category === category.id).length}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <Card key={video.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedVideo(video)}
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         onClick={() => setSelectedVideo(video)}>
                      <div className="bg-white/90 rounded-full p-4 shadow-lg animate-pulse-glow">
                        <Icon name="Play" size={32} className="text-primary ml-1" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                      {video.duration}
                    </Badge>
                    
                    {/* Goals Badge */}
                    <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                      {video.goals} {video.goals === 1 ? 'гол' : 'гола'}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{video.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Icon name="Shield" size={14} className="text-primary" />
                        <span className="font-medium">{video.club}</span>
                      </div>
                      <span className="text-muted-foreground">{video.year}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm mt-2 pt-2 border-t">
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} className="text-secondary" />
                        <span>{video.views} просмотров</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedVideo(video)}
                        className="text-primary hover:text-primary/80"
                      >
                        Смотреть
                        <Icon name="ExternalLink" size={14} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVideo(null)}>
                <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in" onClick={e => e.stopPropagation()}>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                        <p className="text-muted-foreground">{selectedVideo.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedVideo(null)}
                      >
                        <Icon name="X" size={20} />
                      </Button>
                    </div>
                    
                    {/* Video Player Placeholder */}
                    <div className="relative bg-black rounded-lg mb-6 aspect-video flex items-center justify-center">
                      <div className="text-center text-white">
                        <Icon name="Play" size={64} className="mx-auto mb-4 opacity-60" />
                        <p className="text-lg">Видеоплеер</p>
                        <p className="text-sm opacity-60">Здесь будет видео: {selectedVideo.videoUrl}</p>
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold">Детали матча</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Icon name="Shield" size={16} className="text-primary" />
                            <span>{selectedVideo.club}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Calendar" size={16} className="text-secondary" />
                            <span>{selectedVideo.year}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Target" size={16} className="text-accent" />
                            <span>{selectedVideo.goals} {selectedVideo.goals === 1 ? 'гол' : 'гола'}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="font-semibold">Статистика</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Icon name="Eye" size={16} className="text-primary" />
                            <span>{selectedVideo.views} просмотров</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Clock" size={16} className="text-secondary" />
                            <span>{selectedVideo.duration} длительность</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="font-semibold">Категория</h3>
                        <Badge variant="outline" className="w-fit">
                          <Icon name={videoCategories.find(c => c.id === selectedVideo.category)?.icon || 'Play'} size={14} className="mr-1" />
                          {videoCategories.find(c => c.id === selectedVideo.category)?.name}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Stats Summary */}
            <Card className="bg-gradient-to-r from-secondary/10 to-accent/10 border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Статистика видео</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">{videos.length}</div>
                    <div className="text-sm text-muted-foreground">Всего видео</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{videos.reduce((sum, v) => sum + v.goals, 0)}</div>
                    <div className="text-sm text-muted-foreground">Голов в видео</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">
                      {videos.reduce((sum, v) => sum + parseFloat(v.views.replace('M', '').replace('K', '')), 0).toFixed(1)}M
                    </div>
                    <div className="text-sm text-muted-foreground">Всего просмотров</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">6</div>
                    <div className="text-sm text-muted-foreground">Категорий</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* News Section */}
        {activeTab === 'news' && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Новости и интервью</h2>
            
            {/* News Categories Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Filter" className="h-6 w-6 text-primary" />
                  <span>Категории новостей</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {newsCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={newsFilter === category.id ? 'default' : 'outline'}
                      onClick={() => setNewsFilter(category.id)}
                      className="flex items-center space-x-2"
                    >
                      <Icon name={category.icon} size={16} />
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-2">
                        {category.id === 'all' ? newsArticles.length : newsArticles.filter(n => n.category === category.id).length}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Article */}
            {filteredNews.length > 0 && (
              <Card className="overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={filteredNews[0].image}
                      alt={filteredNews[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Главная новость
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                      <Icon name="Calendar" size={14} />
                      <span>{new Date(filteredNews[0].date).toLocaleDateString('ru-RU')}</span>
                      <span>•</span>
                      <span>{filteredNews[0].readTime}</span>
                      <span>•</span>
                      <span className="font-medium">{filteredNews[0].author}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{filteredNews[0].title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{filteredNews[0].summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {filteredNews[0].tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      onClick={() => setSelectedNews(filteredNews[0])}
                      className="w-fit"
                    >
                      Читать полностью
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.slice(1).map((article, index) => (
                <Card key={article.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">
                      {article.readTime}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                      <Icon name="Calendar" size={12} />
                      <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
                      <span>•</span>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{article.summary}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedNews(article)}
                      className="w-full text-primary hover:text-primary/80"
                    >
                      Читать полностью
                      <Icon name="ExternalLink" size={14} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* News Modal */}
            {selectedNews && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedNews(null)}>
                <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in" onClick={e => e.stopPropagation()}>
                  <div className="relative">
                    <img 
                      src={selectedNews.image}
                      alt={selectedNews.title}
                      className="w-full h-64 object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedNews(null)}
                      className="absolute top-4 right-4 bg-black/70 text-white hover:bg-black/80"
                    >
                      <Icon name="X" size={20} />
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      <Icon name="Calendar" size={14} />
                      <span>{new Date(selectedNews.date).toLocaleDateString('ru-RU')}</span>
                      <span>•</span>
                      <span>{selectedNews.readTime}</span>
                      <span>•</span>
                      <span className="font-medium">{selectedNews.author}</span>
                    </div>
                    
                    <h1 className="text-3xl font-bold mb-4">{selectedNews.title}</h1>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedNews.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="prose max-w-none">
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {selectedNews.summary}
                      </p>
                      <div className="text-foreground leading-relaxed whitespace-pre-line">
                        {selectedNews.content}
                      </div>
                    </div>
                    
                    {/* Related Category */}
                    <div className="mt-8 p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name={newsCategories.find(c => c.id === selectedNews.category)?.icon || 'Newspaper'} size={16} className="text-primary" />
                        <span className="font-semibold">Категория:</span>
                        <span>{newsCategories.find(c => c.id === selectedNews.category)?.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* News Stats */}
            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Медиа-статистика</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">{newsArticles.length}</div>
                    <div className="text-sm text-muted-foreground">Публикаций</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">
                      {newsArticles.filter(n => n.category === 'interviews').length}
                    </div>
                    <div className="text-sm text-muted-foreground">Интервью</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-secondary">
                      {newsCategories.length - 1}
                    </div>
                    <div className="text-sm text-muted-foreground">Тем</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">15</div>
                    <div className="text-sm text-muted-foreground">Изданий</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Latest Updates Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                  <span>Последние обновления</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsArticles.slice(0, 4).map((article, index) => (
                    <div key={article.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                         onClick={() => setSelectedNews(article)}>
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm line-clamp-1">{article.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(article.date).toLocaleDateString('ru-RU')} • {article.author}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs flex-shrink-0">
                        {newsCategories.find(c => c.id === article.category)?.name}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;