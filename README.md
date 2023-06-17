# ابزار ToDo-List

نوشته شده با JavaScript و ذخیره‌سازی اطلاعات در Local Storage مرورگر

این برنامه یک نسخه دیگر نیز داشته که در آن ذخیره‌سازی اطلاعات بر روی MySQL انجام می‌شود. برای مشاهده ریپازیتوری آن و همچنین مشاهده نمونه آنلاین، بر روی لینک روبرو کلیک نمایید:
 **[نسخه متصل به MySQL](https://github.com/SepandJP/todo-js-mysql)**

 *نسخه اولیه و در حال توسعه*
 
 ## امکانات
 <hr>

- اضافه کردن تسک‌ها
- علامت زدن تسک‌های انجام شده
- حذف تسک‌ها
- جلوگیری از ثبت عنوان خالی برای تسک‌ها


## نصب برنامه
<hr>
بعد از اطمینان از نصب نیازمندی‌ها بر روی سیستم خود، مطابق راهنمای زیر برنامه رو نصب و روی سیستم خود اجرا نمایید.

### نیازمندی‌ها
<div die="rtl">
- Node.js (With npm)
</div>
<br>

### مراحل نصب
<hr>

1) ابتدا از نصب npm بر روی سیستم خود اطمینان حاصل فرمایید.
بدین منظور در یک ترمینال دستور زیر زیر را وارد نمایید.
```shell
npm -v
```
در صورتی که `npm` رو بر روی سیستم خود نصب داشته باشید در ترمینال نسخه نصب شده را مشاهده می‌نمایید.

2) بعد از دانلود سورس‌کد به صورت `git clone` یا zip، در یک ترمینال در مسیر پوشه اصلی پروژه دستورات زیر را به ترتیب وارد نمایید.

1- نصب پکیج‌های مورد نیاز موجود در `package.json`
```shell
npm i
```
2- راه‌اندازی برنامه
```shell
npm run serve
```
در صورتی که تمامی مراحل به درستی طی شده باشد، پس از اجرای دستور فوق، در ترمینال متنی مشابه زیر خواهید دید:

```bash
> todo-js@1.0.0 serve
> webpack serve

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/, http://[::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'C:\Users\{Your user}\{Project directory}\todo-js-localstorage\public' directory
<i> [webpack-dev-middleware] wait until bundle finished: /
asset main.js 314 KiB [emitted] (name: main)
runtime modules 27.3 KiB 12 modules
modules by path ./node_modules/ 211 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 73.3 KiB 16 modules
  modules by path ./node_modules/webpack/hot/*.js 4.62 KiB 4 modules
  modules by path ./node_modules/html-entities/lib/*.js 115 KiB
    ./node_modules/html-entities/lib/index.js 6.77 KiB [built] [code generated]
    + 3 modules
  ./node_modules/ansi-html-community/index.js 4.25 KiB [built] [code generated]
  ./node_modules/events/events.js 13.9 KiB [built] [code generated]
modules by path ./src/scripts/*.js 9.21 KiB
  ./src/scripts/createDOM.js 3.44 KiB [built] [code generated]
  ./src/scripts/fetchFromFile.js 2.13 KiB [built] [code generated]
  ./src/scripts/insertToFile.js 2.64 KiB [built] [code generated]
  ./src/scripts/main.js 1 KiB [built] [code generated]
webpack 5.80.0 compiled successfully in 1055 ms
```

در این هنگام مرورگر باز شده و برنامه اجرا می‌شود.

*در صورتی که مرورگر به طور خودکار باز نشد، به صورت دستی آدرس `localhost:8080` را در مرورگر خود وارد نمایید.*
