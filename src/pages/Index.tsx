import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    children: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const excursions = [
    {
      title: 'Пушкинский музей',
      subtitle: 'Искусство, которое оживает',
      description: 'Путешествие в мир великих художников и античных шедевров.',
      price: 'от 2 500 ₽',
      icon: 'Palette'
    },
    {
      title: 'Музей-заповедник Царицыно',
      subtitle: 'Тайны императорского сада',
      description: 'Красота, история и квест для любознательных.',
      price: 'от 2 200 ₽',
      icon: 'Castle'
    },
    {
      title: 'Технический музей',
      subtitle: 'Мир изобретений и идей',
      description: 'Интерактивное знакомство с тем, как наука изменила мир.',
      price: 'от 2 800 ₽',
      icon: 'Cog'
    }
  ];

  const advantages = [
    {
      icon: 'Bus',
      title: 'Безопасный транспорт',
      description: 'Проверенные маршруты и комфортные автобусы'
    },
    {
      icon: 'GraduationCap',
      title: 'Опытные педагоги',
      description: 'Программы согласованы со школами'
    },
    {
      icon: 'Sparkles',
      title: 'Интерактивность',
      description: 'Дети участвуют, а не просто слушают'
    },
    {
      icon: 'Camera',
      title: 'Фотоотчеты',
      description: 'Фото и видео для родителей'
    },
    {
      icon: 'Shield',
      title: 'Полная поддержка',
      description: 'От заявки до возвращения домой'
    },
    {
      icon: 'Map',
      title: 'Авторские маршруты',
      description: 'Уникальные образовательные программы'
    }
  ];

  const testimonials = [
    {
      text: 'Дети приехали в восторге! Всё организовано чётко, а экскурсовод сумел удержать внимание весь день.',
      author: 'Классный руководитель',
      position: 'Одинцово, школа № 8'
    },
    {
      text: 'Спасибо за заботу, теплоту и интересную подачу. Дочка весь вечер рассказывала, что узнала.',
      author: 'Наталья',
      position: 'Мама ученицы 5-го класса'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Compass" className="text-primary" size={32} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Академия Путешествий</h1>
              <p className="text-sm text-primary font-semibold">"Умный маршрут"</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</a>
            <a href="#excursions" className="text-gray-700 hover:text-primary transition-colors font-medium">Экскурсии</a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Оставить заявку</Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-white">Познавательные экскурсии для детей</Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Путешествуем с умом — открываем мир вместе!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Мы не просто возим детей на экскурсии, мы формируем у детей понимание для чего им эта информация и где она пригодится в жизни.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Map" className="mr-2" size={20} />
                  Выбрать маршрут
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Оставить заявку
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5940bf30-7056-498f-b4e4-464e57907980/files/2ebcdf0d-da78-4aca-85cd-e05ba1d674ae.jpg" 
                alt="Дети на экскурсии" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  <div>
                    <p className="font-bold text-gray-900">1000+</p>
                    <p className="text-sm text-gray-600">Счастливых детей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary">О нас</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Учиться можно не только в классе
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы превращаем дорогу в живой урок, а экскурсию — в настоящее приключение. 
              Наши туры объединяют движение, знания и эмоции. Ребёнок не просто смотрит — 
              он понимает, открывает, исследует.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <Icon name="Award" className="mx-auto text-primary mb-2" size={40} />
                <p className="font-bold text-2xl text-gray-900">5+</p>
                <p className="text-sm text-gray-600">Лет опыта</p>
              </div>
              <div className="text-center">
                <Icon name="Users" className="mx-auto text-primary mb-2" size={40} />
                <p className="font-bold text-2xl text-gray-900">1000+</p>
                <p className="text-sm text-gray-600">Довольных детей</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" className="mx-auto text-primary mb-2" size={40} />
                <p className="font-bold text-2xl text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Маршрутов</p>
              </div>
              <div className="text-center">
                <Icon name="School" className="mx-auto text-primary mb-2" size={40} />
                <p className="font-bold text-2xl text-gray-900">30+</p>
                <p className="text-sm text-gray-600">Школ-партнёров</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary mb-4">Наши преимущества</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Мы создаём безопасную и увлекательную среду для обучения через путешествия
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="excursions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary mb-4">Популярные направления</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши экскурсии
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Выберите маршрут для вашего класса — каждая программа разработана с образовательной целью
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {excursions.map((excursion, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon name={excursion.icon as any} className="text-primary group-hover:scale-110 transition-transform" size={64} />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{excursion.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{excursion.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{excursion.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{excursion.price}</span>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Смотреть все экскурсии
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary mb-4">Отзывы</Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что говорят родители и учителя
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <Icon name="Quote" className="text-primary/30 mb-4" size={48} />
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="outline" className="text-primary border-primary mb-4">Свяжитесь с нами</Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Оставьте заявку
              </h3>
              <p className="text-lg text-gray-700">
                Мы подберём лучший маршрут для вашего класса
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Ваше имя</label>
                      <Input 
                        placeholder="Введите имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Школа</label>
                      <Input 
                        placeholder="Название школы"
                        value={formData.school}
                        onChange={(e) => setFormData({...formData, school: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Количество детей</label>
                      <Input 
                        type="number"
                        placeholder="Например, 25"
                        value={formData.children}
                        onChange={(e) => setFormData({...formData, children: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Телефон</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                      <Icon name="Send" className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Адрес</p>
                        <p className="text-gray-700">г. Одинцово</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Телефон</p>
                        <a href="tel:+79670598555" className="text-primary hover:underline">+7 (967) 059-85-55</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:UmniiMarshrut@mail.ru" className="text-primary hover:underline">UmniiMarshrut@mail.ru</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardHeader>
                    <CardTitle>Мы в соцсетях</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                        <Icon name="MessageCircle" size={20} />
                      </Button>
                      <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                        <Icon name="Send" size={20} />
                      </Button>
                      <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                        <Icon name="Phone" size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Compass" className="text-primary" size={32} />
                <div>
                  <h4 className="font-bold">Академия Путешествий</h4>
                  <p className="text-sm text-primary">"Умный маршрут"</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Познавательные экскурсии для школьников
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Навигация</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#excursions" className="hover:text-primary transition-colors">Экскурсии</a></li>
                <li><a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Для школ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для родителей</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>г. Одинцово</li>
                <li><a href="tel:+79670598555" className="hover:text-primary transition-colors">+7 (967) 059-85-55</a></li>
                <li><a href="mailto:UmniiMarshrut@mail.ru" className="hover:text-primary transition-colors">UmniiMarshrut@mail.ru</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Академия Путешествий "Умный маршрут". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
