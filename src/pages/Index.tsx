import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    {
      id: 1,
      name: 'Ламинат',
      description: 'Прочное и красивое покрытие для любого помещения',
      image: 'https://cdn.poehali.dev/projects/10df9f0c-7236-4881-8591-1010758e79f2/files/3a51af03-1374-42c6-94d6-c5a4dcea0c45.jpg',
      icon: 'Layers',
      products: 24
    },
    {
      id: 2,
      name: 'ПВХ плитка',
      description: 'Влагостойкое решение для кухни и ванной',
      image: 'https://cdn.poehali.dev/projects/10df9f0c-7236-4881-8591-1010758e79f2/files/46b729c4-78cc-4aa3-8012-d4d15019cd0d.jpg',
      icon: 'Grid3x3',
      products: 18
    },
    {
      id: 3,
      name: 'Керамогранит',
      description: 'Элитное покрытие премиум-класса',
      image: 'https://cdn.poehali.dev/projects/10df9f0c-7236-4881-8591-1010758e79f2/files/141dcc24-eed7-4300-a21e-74eecb8e1790.jpg',
      icon: 'Square',
      products: 15
    },
    {
      id: 4,
      name: 'Террасные системы',
      description: 'Надежное покрытие для террас и балконов',
      image: 'https://cdn.poehali.dev/projects/10df9f0c-7236-4881-8591-1010758e79f2/files/3a51af03-1374-42c6-94d6-c5a4dcea0c45.jpg',
      icon: 'Home',
      products: 12
    }
  ];

  const promotions = [
    {
      id: 1,
      title: 'Скидка 25% на ламинат',
      description: 'Специальное предложение на коллекцию премиум-ламината',
      discount: '25%',
      validUntil: '31 декабря'
    },
    {
      id: 2,
      title: 'ПВХ плитка -30%',
      description: 'Распродажа остатков коллекции',
      discount: '30%',
      validUntil: '15 декабря'
    },
    {
      id: 3,
      title: 'Керамогранит по акции',
      description: 'Цены снижены на весь ассортимент керамогранита',
      discount: '20%',
      validUntil: '25 декабря'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/projects/10df9f0c-7236-4881-8591-1010758e79f2/files/e99fe453-288a-4db3-9c8b-17ed4d94eab6.jpg" 
                alt="Большой Папа" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-2xl font-bold text-primary">Большой Папа</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === 'home' ? 'text-accent' : 'text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === 'catalog' ? 'text-accent' : 'text-foreground'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('promotions')}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === 'promotions' ? 'text-accent' : 'text-foreground'
                }`}
              >
                Акции и скидки
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === 'contacts' ? 'text-accent' : 'text-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Напольные покрытия премиум-класса
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Ламинат, ПВХ плитка, керамогранит и террасные системы. Более 70 видов покрытий для вашего идеального пола.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('catalog')}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="catalog" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наш каталог</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий тип напольного покрытия для вашего проекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-white">
                      {category.products} товаров
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon name={category.icon as any} size={24} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                    Смотреть товары
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <Icon name="Award" size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Официальная гарантия от производителя на все товары</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <Icon name="Truck" size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставим ваш заказ в течение 1-3 дней</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <Icon name="Users" size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультация</h3>
              <p className="text-muted-foreground">Профессиональная помощь в выборе покрытия</p>
            </div>
          </div>
        </div>
      </section>

      <section id="promotions" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Акции и скидки</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Специальные предложения только в этом месяце
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card
                key={promo.id}
                className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 bg-accent text-white px-6 py-3 rounded-bl-3xl">
                  <span className="text-2xl font-bold">-{promo.discount}</span>
                </div>
                <CardContent className="p-6 pt-16">
                  <h3 className="text-xl font-semibold mb-3">{promo.title}</h3>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>До {promo.validUntil}</span>
                    </div>
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Примерная, д. 123
                        <br />
                        ТЦ "Стройматериалы", павильон 45
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground">
                        +7 (495) 123-45-67
                        <br />
                        +7 (800) 555-35-35 (бесплатно)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                      <p className="text-muted-foreground">
                        Пн-Пт: 9:00 - 20:00
                        <br />
                        Сб-Вс: 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Ваше сообщение"
                        rows={4}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Отправить сообщение
                      <Icon name="Send" size={16} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/projects/10df9f0c-7236-4881-8591-1010758e79f2/files/e99fe453-288a-4db3-9c8b-17ed4d94eab6.jpg" 
                alt="Большой Папа" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Большой Папа</span>
            </div>
            <p className="text-white/70 text-sm">
              © 2024 Большой Папа. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;