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
      </main>
    </div>
  );
};

export default Index;