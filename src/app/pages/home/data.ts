import {ILink} from '../../components/link.component';


export interface IPageInfo {
  label: string;
  content: string[];
  linkCode: ILink[];
  linkDemo: ILink;
}

export const appPagesInfo: IPageInfo[] = [
  {
    label: 'Задача 1',
    content: ['Напишите аналог php-функции array_flip на JavaSrcipt (ключи и значения меняются местами).'],
    linkCode: [{
      label: 'task-1.js',
      external: true,
      url: 'https://github.com/orion76/test-one-frontend/blob/master/src/assets/js/task-1.js'
    }],
    linkDemo: {label: 'Задача 1', url: '/task-1'}
  },
  {
    label: 'Задача 2',
    content: ['Есть страница http://a.ru/1.php, которая содержит textarea с идентификатором id1. Напишите для этой страницы JavaScript-код, который по клику на эту textarea вставляет в неё содержимой страницы http://a.ru/1.txt . Можно использовать jquery-функции.'],
    linkCode: [{
      label: 'task-2.js',
      external: true,
      url: 'https://github.com/orion76/test-one-frontend/blob/master/src/assets/js/task-2.js'
    }],
    linkDemo: {label: 'Задача 2', url: '/task-2'}
  },
  {
    label: 'Задача 3',
    content: ['Напишите html+css+js страницу, содержащую поле ввода типа textarea, которое «убегает» от мышки, то есть перемещается в любое другое место при наведении на него курсора мыши. Можно использовать jquery-функции.'],
    linkCode: [{
      label: 'task-3.js',
      external: true,
      url: 'https://github.com/orion76/test-one-frontend/blob/master/src/assets/js/task-3.js'
    }],
    linkDemo: {label: 'Задача 3', url: '/task-3'}
  },
  {
    label: 'Задача 4',
    content: ['Есть php-класс A, напишите его функцию f($a), которая вызывает другую его функцию, название которое передано в виде строкового аргумента $a, а если такой функции в классе нет – выводит слово «error».'],
    linkCode: [{
      label: 'Task4Controller.php',
      external: true,
      url: 'https://github.com/orion76/test-one-backend/blob/master/src/Controller/Task4Controller.php'
    }],
    linkDemo: {label: 'Задача 4', url: '/task-4'}
  },
  {
    label: 'Задача 5',
    content: ['Напишите код на php, который выводит содержимой таблицы БД в виде HTML-таблицы. В примере можно использовать любой тип СУБД и любые известные библиотеки и фреймворки для обращения к БД.'],
    linkCode: [
      {
        label: 'Backend',
        external: true,
        url: 'https://github.com/orion76/test-one-backend/blob/master/src/Controller/Task5Controller.php'
      },
      {
        label: 'Frontend',
        external: true,
        url: 'https://github.com/orion76/test-one-frontend/blob/master/src/app/pages/task-5/task-5.component.ts'
      },
    ],
    linkDemo: {label: 'Задача 5', url: '/task-5'}
  },
  {
    label: 'Задача 6',
    content: ['Доработайте код предыдущего теста, чтобы отображалось объединение двух таблиц (набор столбцов в результате – объединение полей таблиц), связанных внешними ключами.'],
    linkCode: [
      {
        label: 'Backend',
        external: true,
        url: 'https://github.com/orion76/test-one-backend/blob/master/src/Controller/Task6Controller.php'
      },
      {
        label: 'Frontend',
        external: true,
        url: 'https://github.com/orion76/test-one-frontend/blob/master/src/app/pages/task-6/task-6.component.ts'
      }
    ],
    linkDemo: {label: 'Задача 6', url: '/task-6'}
  },
  {
    label: 'Задача 7',
    content: ['Напишет код html-страницы, на которую можно drag-and-grop-нуть json-файл. Сразу послеdrag-and-drop-а этот json-файл должен быть отправлен на сервер, там средствами php разобран, и на основе него создан вложенный html-список, который должен быть отправлен обратно и вставлен в качестве содержимого страницы.'],
    linkCode: [
      {
        label: 'Backend',
        external: true,
        url: 'https://github.com/orion76/test-one-backend/blob/master/src/Controller/Task7Controller.php'
      },
      {
        label: 'Frontend',
        external: true,
        url: 'https://github.com/orion76/test-one-frontend/blob/master/src/app/pages/task-7/task-7.component.ts'
      },
      {
        label: 'file-upload.component',
        external: true,
        url: 'https://github.com/orion76/test-one-frontend/blob/master/src/app/pages/task-7/file-upload.component.ts'
      }
    ],
    linkDemo: {label: 'Задача 7', url: '/task-7'}
  },
  {
    label: 'Задача 8',
    content: [
      '    Тест для проверки для проверки владения control-ами (кнопки, закладки, диалоговые окна, разделители).',

      'Требуется написать html+css+js код страницы, разделенной на три части (div-а): слева панель на всю высоту страницы и 30% ширины, справа две горизонтальные части на 70% ширины и 50% высоты.',
      'Пользователю должна быть доступна возможности изменения ширины левой части и высоты верхней/нижней путем перетаскивания границ вправо/влево и вверх/вниз соответственно (использовать controlsplitter).',
      'На всю ширину и высоту нижней часть должен быть развернут контрол с двумя закладками (использовать controltabs) с названиями «один», «два». ',
      'При переключении на закладку «один» должен открываться элемент textarea-а, редактирование которого приводит к изменению содержимого div-а левой части страницы.',
      'При переключении на закладку «два» должен открываться элемент textarea-а, редактирование которого приводит к изменению содержимого div-а верхней части страницы.',
      'Допустимо использовать jquery-ui или любые другие известные JS-библиотеки, реализующие splitter-ы и tabber-ы.',
    ],
    linkCode: [{label: 'task-8.component', external: true, url: 'https://github.com/orion76/test-one-frontend/blob/master/src/app/pages/task-8/task-8.component.ts'}],
    linkDemo: {label: 'Задача 8', url: '/task-8'}
  },
  {
    label: 'Задача 9',
    content: ['С использованием любой JS-библиотеки отображения и управления картами на html-странице напишите html-страницу с картой Москвы, на которую добавлена полупрозрачная красная зона, вокруг садового кольца. Границы зоны должны допускать возможность их изменения/редактирования. При каждом изменении границы должна пересчитываться и где-то отображаться либо площадь выделенной зоны, либо её периметр.'],
    linkCode: [{label: 'task-9.component', external: true, url: 'https://github.com/orion76/test-one-frontend/blob/master/src/app/pages/task-9/task-9.component.ts'}],
    linkDemo: {label: 'Задача 9', url: '/task-9'}
  },
];
