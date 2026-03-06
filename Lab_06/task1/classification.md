# Классификация паттернов (SNIPPET 01-10)

### SNIPPET_01
* [cite_start]**Семья:** Creational (Порождающие)[cite: 1304].
* [cite_start]**Название:** Singleton (Одиночка)[cite: 1305].
* **Доказательство:** `if (DatabaseConnection._instance) { return DatabaseConnection._instance; [cite_start]}` [cite: 556-558].
* **Ссылка:** Ch. [cite_start]6, "Creational Design Patterns" [cite: 1345-1348].
* [cite_start]**Обоснование:** Код контролирует процесс создания объекта, предотвращая создание более чем одного экземпляра подключения к базе данных[cite: 1346]. [cite_start]Это соответствует определению порождающих паттернов как механизмов контроля создания объектов[cite: 1304].

### SNIPPET_02
* [cite_start]**Семья:** Behavioral (Поведенческие)[cite: 1308].
* [cite_start]**Название:** Observer (Наблюдатель)[cite: 1309].
* [cite_start]**Доказательство:** `subscribe(event, callback) { ... } publish(event, data) { ... }`[cite: 599, 609].
* **Ссылка:** Ch. [cite_start]6, "Behavioral Design Patterns" [cite: 1352-1355].
* [cite_start]**Обоснование:** Паттерн фокусируется на улучшении коммуникации между объектами системы[cite: 1308]. [cite_start]Он позволяет уведомлять группу классов об изменениях для обеспечения согласованности[cite: 1315].

### SNIPPET_03
* [cite_start]**Семья:** Structural (Структурные)[cite: 1306].
* [cite_start]**Название:** Facade (Фасад)[cite: 1307].
* **Доказательство:** `login(token) { ... this._auth.validateToken(token); const user = this._repo.findByToken(token); [cite_start]... }` [cite: 659, 664-668].
* **Ссылка:** Ch. [cite_start]6, "Structural Design Patterns" [cite: 1349-1351].
* [cite_start]**Обоснование:** Класс предоставляет единый упрощенный интерфейс, который скрывает сложность всей подсистемы аутентификации и логирования[cite: 1314]. [cite_start]Это типичная задача структурного паттерна — композиция объектов[cite: 1306].

### SNIPPET_04
* [cite_start]**Семья:** Creational (Порождающие)[cite: 1304].
* [cite_start]**Название:** Factory Method (Фабричный метод)[cite: 1313].
* [cite_start]**Доказательство:** `function createNotifier(type) { switch (type) { ... } }` [cite: 697-698].
* **Ссылка:** Ch. [cite_start]6, GoF Table[cite: 534].
* [cite_start]**Обоснование:** Функция создает экземпляры различных производных классов (Email, SMS) на основе переданных данных или событий[cite: 534]. [cite_start]Она абстрагирует процесс выбора конкретного класса от вызывающей стороны[cite: 1346].

### SNIPPET_05
* [cite_start]**Семья:** Structural (Структурные)[cite: 1306].
* [cite_start]**Название:** Decorator (Декоратор)[cite: 1307].
* **Доказательство:** `class SeverityLogger { constructor (logger, level) { this._logger = logger; [cite_start]... } }` [cite: 727-729].
* **Ссылка:** Ch. [cite_start]6, "Structural Design Patterns" [cite: 1349-1351].
* [cite_start]**Обоснование:** Паттерн динамически добавляет альтернативную обработку (метку важности) объектам, оборачивая их[cite: 534]. [cite_start]Это позволяет изменять поведение объекта без изменения его структуры[cite: 1350].

### SNIPPET_06
* [cite_start]**Семья:** Creational (Порождающие)[cite: 1304].
* [cite_start]**Название:** Prototype (Прототип)[cite: 1305].
* [cite_start]**Доказательство:** `vehiclePrototype.clone();` и `Object.getPrototypeOf(car) === vehiclePrototype` [cite: 770, 783-784].
* **Ссылка:** Ch. [cite_start]6, "Creational Design Patterns" [cite: 1345-1348].
* [cite_start]**Обоснование:** Используется полностью инициализированный экземпляр (прототип) для копирования или клонирования новых объектов[cite: 534].

### SNIPPET_07
* [cite_start]**Семья:** Behavioral (Поведенческие)[cite: 1308].
* [cite_start]**Название:** Chain of Responsibility (Цепочка обязанностей)[cite: 527].
* **Доказательство:** `} else if (this.next) { this.next.handle(ticket); [cite_start]}`[cite: 806, 809].
* **Ссылка:** Ch. [cite_start]6, "Behavioral Design Patterns" [cite: 1352-1355].
* [cite_start]**Обоснование:** Запрос передается по цепочке объектов, пока один из них не сможет его обработать[cite: 534].

### SNIPPET_08
* [cite_start]**Семья:** Behavioral (Поведенческие)[cite: 1308].
* [cite_start]**Название:** Command (Команда)[cite: 1355].
* **Доказательство:** `execute() { this.editor.write(this.chars); [cite_start]} undo() { ... }` [cite: 848-849].
* **Ссылка:** Ch. [cite_start]6, "Behavioral Design Patterns" [cite: 1352-1355].
* [cite_start]**Обоснование:** Паттерн инкапсулирует действие (команду) в объект, отделяя выполнение от инициатора[cite: 534].

### SNIPPET_09
* [cite_start]**Семья:** Structural (Структурные)[cite: 1306].
* [cite_start]**Название:** Flyweight (Легковес)[cite: 1307].
* **Доказательство:** `if (!this._types [key]) { this._types [key] = new TreeType(...); [cite_start]}` [cite: 903-905].
* **Ссылка:** Ch. [cite_start]6, "Structural Design Patterns" [cite: 1349-1351].
* [cite_start]**Обоснование:** Использует разделяемые экземпляры для эффективного хранения информации, которая дублируется в других объектах[cite: 534].

### SNIPPET_10
* [cite_start]**Семья:** Behavioral (Поведенческие)[cite: 1308].
* [cite_start]**Название:** Mediator (Посредник)[cite: 1309].
* [cite_start]**Доказательство:** `this.room.send(this, message, toName);` и класс `ChatRoom`[cite: 973, 937].
* **Ссылка:** Ch. [cite_start]6, "Behavioral Design Patterns" [cite: 1352-1355].
* [cite_start]**Обоснование:** Определяет упрощенное взаимодействие между классами, предотвращая их прямое обращение друг к другу[cite: 534].