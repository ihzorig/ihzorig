from django.db import models

class User(models.Model):
    USER = "Хэрэглэгч"
    BOSS = "Онцгой хэрэглэгч"
    ADMIN = 'АДМИН'

    TOKEN_CHOICES = (
        (USER, "Хэрэглэгч"),
        (BOSS, "Онцгой хэрэглэгч"),
        (ADMIN, "АДМИН")
    )

    company = models.ForeignKey('Company', on_delete=models.DO_NOTHING, verbose_name="Компани", related_name='users')
    position = models.CharField("Албан тушаал", max_length=200)
    firstname = models.CharField("Овог", max_length=200)
    lastname = models.CharField("Нэр", max_length=100)
    number = models.CharField("Утасны дугаар", max_length=20, unique=True)
    email = models.EmailField("И-мэйл", max_length=254, unique=True)
    token = models.CharField("Эрх", max_length=50, choices=TOKEN_CHOICES, default=USER)
    username = models.CharField("Нэвтрэх нэр", max_length=200, unique=True)
    password = models.CharField("Нууц үг", max_length=200)
    
    def __str__(self):
        return f"{self.firstname[0]} {self.lastname}"
    
    # def __str__(self_position):
    #     return f'{self_position}'
        

class Company(models.Model):
    name = models.CharField("Компани", max_length=200)
    company_id = models.CharField("Байгууллагын РД", max_length=200)

    def __str__(self):
        return self.name

class Office(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, verbose_name="Компани", related_name='offices')
    office_id = models.CharField("Оффис хаяг", max_length=200, unique=True)
    
    def __str__(self):
        return self.office_id

class Product(models.Model):
    ELECTRONIC = "Цахилгаан бараа"
    FURNITURE = "Тавилга"
    TECHNIC_EQ = "Техник төхөөрөмж"
    OTHERS = "Бусад"

    PRODUCTS_CAT_CHOICES = (
        (ELECTRONIC, "Цахилгаан бараа"),
        (FURNITURE, "Тавилга"),
        (TECHNIC_EQ, "Техник төхөөрөмж"),
        (OTHERS, "Бусад")
    )

    company = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='products', verbose_name="Компани")
    product_category = models.CharField("Хөрөнгийн төрөл", max_length=200, choices=PRODUCTS_CAT_CHOICES, default=ELECTRONIC)
    product_name = models.CharField("Хөрөнгийн нэр", max_length=200)
    rating = models.IntegerField("Үнэлгээ")
    use_time = models.CharField("Ашиглах хугацаа", max_length=50)
    used_time = models.DateField("Хүлээж авсан огноо")
    quantity = models.IntegerField("Тоо ширхэг")
    location = models.ForeignKey('Office', on_delete=models.CASCADE, verbose_name="Оффис", related_name='products')
    explanation = models.TextField("Тайлбар")
    picture = models.ImageField("Зураг", upload_to='product_images/', height_field=None, width_field=None, max_length=None)

    def __str__(self):
        return self.product_name

class Transfer(models.Model):
    company = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='transfers_as_company', verbose_name="Компани")
    position = models.ForeignKey('User', on_delete=models.CASCADE, related_name='transfers_as_position', verbose_name="Албан тушаал")
    name = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='transfers_as_name', verbose_name="Нэр")
    transfer_date = models.DateField('Шилжүүлэгийн огноо', auto_now=False, auto_now_add=False)
    command_id = models.CharField(max_length=200)
    command_date = models.DateField('Тушаалын огноо', auto_now=False, auto_now_add=False)
    command_pic = models.ImageField("Тушаалын зураг", upload_to="product_images/", height_field=None, width_field=None, max_length=None)
    product_pic = models.ImageField("Эд хөрөнгийн зураг", upload_to="product_images/", height_field=None, width_field=None, max_length=None)

    def __str__(self):
        return f"{self.name} {self.transfer_date}"


class Action(models.Model):
    company = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='action_as_company', verbose_name="Компани")
    position = models.ForeignKey('User', on_delete=models.CASCADE, related_name='action_as_position', verbose_name="Албан тушаал")
    name = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='action_as_name', verbose_name="Нэр")
    action_date = models.DateField(("Акталсан огноо"), auto_now=False, auto_now_add=False)
    action_code = models.CharField(("Актын тушаалын дугаар"), max_length=50)
    action_command_date = models.DateField(("Актын тушаалын огноо"), auto_now=False, auto_now_add=False)
    product_pic = models.ImageField("Эд хөрөнгийн зураг", upload_to="product_images/", height_field=None, width_field=None, max_length=None)
    rating = models.IntegerField("Үнэлгээ")
    
    def __str__(self):
        return f'{self.name} {self.action_code}'
    