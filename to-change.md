DONE --- 1. Fix inheritance
DONE --- 2. Add airbnb eslint config
DONE --- 3. Remove service code from tests
DONE --- 4. Unwrap 'describe' blocks nesting
DONE --- 5. Get rid of multiple assertions
DONE --- 6. Make tests granular
7. Get rid of hard-coded data
DONE --- 8. Follow the only assertion style => expect

EXTRAS:
9. Optimize locators and get rid of redundant ones
10. Update hooks / api calls / variables initialization
11. Optimize tests steps
12. Change assertions

1. Page objects:
Все хорошо. Единственное, мне показалось странным наследование login page от base page из-за searchBar и topNavbar, которых вроде как нет на логине. Возможно, это отностится и к другим page object-там

2. Eslint:
Рекомендую использовать какой-нибудь популярный конфиг (например, от airbnb) - можно узнать много нового. 
Избегай eslint-disable комментариев. Например
// eslint-disable-next-line no-undef
return browser.wait(EC.visibilityOf(element), timeout)
Просто добавь этот undefined (`EC` как я понял) в .eslintrc.js (объект "globals")

Тесты:

3. -- очень много сервисного кода (if/else, forEach, работа с локаторами, etc.)
Сервисный код в тестах - зло. Читаемость 0, а через месяц ты забудешь как оно работает, а коллеги вообще никогда не поймут (утрированно)
Выносить в отдельные функции, хелперы, делать параметризацию

4. -- сильная вложенность describe
Усложняет поддержку и читаемость. Если понадобится прикрутить другой репортер - могут появиться большие проблемы
Разбивать на отдельные тесты. Один файл - один describe.

5. -- по несколько проверок (expect, assert) в каждом it блоке
Появляется неразбериха в отчетах.
Разбивать на мелкие it блоки. Одна проверка - один it блок

6. Общий смысл такой же, как с describe:
  - чем меньше тест, тем лучше
  - лучше несколько маленьких, чем один большой
Это не всегда применимо, но стремится к этому  стоит - упрощает поддержку. Писать тесты не сложно, сложно их поддерживать

7. -- хард-код данных в тестах
Вынести всё в конфиг

8. -- смесь control flow с промисами выглядит странно. Было много мест, когда одной строке сначала промис, а в другой уже control flow. Вроде такого:
somePromise().then(resul => expect(result).toBe(smth))
expect(somePromise()).toBe(smth)
Делать в одном стиле.

PS: если есть какие-то вопросы по этим пунктам или я что-то пропустил, можем пообщаться онлайн на след неделе
