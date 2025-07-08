import { Recipe, RecipeCategory } from '@/types'

export const recipeCategories: RecipeCategory[] = [
  {
    id: 'main-dish',
    name: 'Món chính',
    slug: 'mon-chinh',
    description: 'Những món ăn chính đầy dinh dưỡng',
    color: '#8B6F47'
  },
  {
    id: 'dessert',
    name: 'Tráng miệng',
    slug: 'trang-mieng',
    description: 'Những món ngọt ngào sau bữa ăn',
    color: '#E8D5D5'
  },
  {
    id: 'soup',
    name: 'Canh & Súp',
    slug: 'canh-sup',
    description: 'Những món nước ấm áp',
    color: '#B8A898'
  },
  {
    id: 'snack',
    name: 'Ăn vặt',
    slug: 'an-vat',
    description: 'Những món nhỏ thơm ngon',
    color: '#D4C4B8'
  }
]

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Bánh Mì Gà Nướng Mật Ong',
    slug: 'banh-mi-ga-nuong-mat-ong',
    description: 'Bánh mì giòn rụm với gà nướng mật ong thơm lừng, kết hợp rau sống tươi mát',
    content: `
Có những buổi sáng mình thức dậy chỉ muốn có một chiếc bánh mì thật ngon để bắt đầu ngày mới...

## Câu chuyện của món ăn

Món bánh mì này là kết quả của những lần mình thử nghiệm trong bếp, muốn tạo ra một phiên bản bánh mì đặc biệt cho những người thân yêu.

## Nguyên liệu chính

- Thịt gà phi lê
- Mật ong nguyên chất
- Bánh mì Việt Nam
- Rau sống tươi

## Mẹo của Lan

💡 Ướp gà ít nhất 2 tiếng để thịt thấm gia vị, nướng ở nhiệt độ 180°C để giữ được độ mềm.
    `,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    category: recipeCategories[0],
    tags: ['gà nướng', 'bánh mì', 'mật ong', 'breakfast'],
    ingredients: [
      { id: '1', name: 'Thịt gà phi lê', amount: '300', unit: 'g' },
      { id: '2', name: 'Mật ong', amount: '2', unit: 'tbsp' },
      { id: '3', name: 'Bánh mì Việt Nam', amount: '2', unit: 'ổ' },
      { id: '4', name: 'Rau diếp', amount: '100', unit: 'g' },
      { id: '5', name: 'Cà chua', amount: '1', unit: 'quả' },
      { id: '6', name: 'Dưa leo', amount: '1/2', unit: 'quả' }
    ],
    instructions: [
      { id: '1', step: 1, description: 'Ướp gà với mật ong và gia vị trong 2 tiếng', time: 120 },
      { id: '2', step: 2, description: 'Nướng gà ở 180°C trong 25 phút', time: 25 },
      { id: '3', step: 3, description: 'Chuẩn bị rau sống và cắt bánh mì', time: 10 },
      { id: '4', step: 4, description: 'Lắp ráp bánh mì với gà và rau', time: 5 }
    ],
    cookingTime: 160,
    servings: 2,
    difficulty: 'Trung bình',
    tips: 'Ướp gà ít nhất 2 tiếng để thịt thấm gia vị',
    story: 'Món này mình tạo ra khi muốn có một chiếc bánh mì đặc biệt cho bữa sáng cuối tuần.',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Chè Bưởi Dẻo Thơm',
    slug: 'che-buoi-deo-thom',
    description: 'Chè bưởi mềm dẻo với nước cốt dừa béo ngậy, đậm đà hương vị truyền thống',
    content: `
Những chiều mưa mình thường làm chè bưởi, để cả nhà quây quần bên nhau...

## Câu chuyện của món ăn

Đây là công thức chè bưởi mà bà ngoại mình truyền lại, với một chút biến tấu để phù hợp khẩu vị hiện đại.

## Nguyên liệu chính

- Bưởi Diễn tươi
- Nước cốt dừa
- Bột năng
- Đường phèn

## Mẹo của Lan

💡 Chọn bưởi Diễn tách múi cẩn thận, loại bỏ hết màng trắng để không bị đắng.
    `,
    image: 'https://images.unsplash.com/photo-1563379091-3c95c8f5b3b8?w=800',
    category: recipeCategories[1],
    tags: ['chè', 'bưởi', 'dessert', 'traditional'],
    ingredients: [
      { id: '1', name: 'Bưởi Diễn', amount: '1/2', unit: 'quả' },
      { id: '2', name: 'Nước cốt dừa', amount: '400', unit: 'ml' },
      { id: '3', name: 'Bột năng', amount: '50', unit: 'g' },
      { id: '4', name: 'Đường phèn', amount: '80', unit: 'g' },
      { id: '5', name: 'Muối', amount: '1/4', unit: 'tsp' }
    ],
    instructions: [
      { id: '1', step: 1, description: 'Tách múi bưởi, loại bỏ màng trắng', time: 20 },
      { id: '2', step: 2, description: 'Pha bột năng với nước, nấu đến đặc', time: 15 },
      { id: '3', step: 3, description: 'Pha nước cốt dừa với đường', time: 10 },
      { id: '4', step: 4, description: 'Trộn tất cả và để nguội', time: 5 }
    ],
    cookingTime: 50,
    servings: 4,
    difficulty: 'Dễ',
    tips: 'Chọn bưởi tách múi cẩn thận để không bị đắng',
    story: 'Công thức chè bưởi truyền thống từ bà ngoại với chút biến tấu hiện đại.',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '3',
    title: 'Canh Chua Cá Lóc',
    slug: 'canh-chua-ca-loc',
    description: 'Canh chua đậm đà với cá lóc tươi ngon, me chua và rau thơm đặc trưng miền Nam',
    content: `
Mỗi khi nhớ nhà, mình lại nấu canh chua cá lóc...

## Câu chuyện của món ăn

Đây là món canh truyền thống miền Nam mà mình học được từ mẹ, mang đậm hương vị quê nhà.

## Nguyên liệu chính

- Cá lóc tươi
- Me chua
- Cà chua
- Đậu bắp
- Ngò gai

## Mẹo của Lan

💡 Phi thơm hành tỏi trước khi nấu nước dùng, canh sẽ thơm ngon hơn rất nhiều.
    `,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800',
    category: recipeCategories[2],
    tags: ['canh chua', 'cá lóc', 'miền Nam', 'traditional'],
    ingredients: [
      { id: '1', name: 'Cá lóc', amount: '500', unit: 'g' },
      { id: '2', name: 'Me chua', amount: '2', unit: 'tbsp' },
      { id: '3', name: 'Cà chua', amount: '2', unit: 'quả' },
      { id: '4', name: 'Đậu bắp', amount: '100', unit: 'g' },
      { id: '5', name: 'Ngò gai', amount: '50', unit: 'g' },
      { id: '6', name: 'Hành tím', amount: '2', unit: 'củ' }
    ],
    instructions: [
      { id: '1', step: 1, description: 'Sơ chế cá lóc, cắt khúc vừa ăn', time: 15 },
      { id: '2', step: 2, description: 'Phi thơm hành tỏi, cho cà chua vào xào', time: 10 },
      { id: '3', step: 3, description: 'Đổ nước, nêm gia vị và me chua', time: 5 },
      { id: '4', step: 4, description: 'Cho cá và rau vào nấu 15 phút', time: 15 }
    ],
    cookingTime: 45,
    servings: 4,
    difficulty: 'Trung bình',
    tips: 'Phi thơm hành tỏi trước khi nấu để canh thơm ngon hơn',
    story: 'Món canh truyền thống miền Nam mang đậm hương vị quê nhà.',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '4',
    title: 'Bánh Bao Chiên Giòn',
    slug: 'banh-bao-chien-gion',
    description: 'Bánh bao nhân thịt giòn rụm bên ngoài, mềm mại bên trong, ăn kèm tương ớt',
    content: `
Những chiều lành lạnh, không gì bằng bánh bao chiên nóng hổi...

## Câu chuyện của món ăn

Món này mình học được từ một quán ăn vỉa hè, sau đó tự nghiên cứu để làm tại nhà.

## Nguyên liệu chính

- Bánh bao sẵn
- Thịt heo xay
- Trứng gà
- Bột chiên giòn

## Mẹo của Lan

💡 Chiên với lửa vừa để bánh chín đều, không bị cháy ngoài sống trong.
    `,
    image: 'https://images.unsplash.com/photo-1563379091-3c95c8f5b3b8?w=800',
    category: recipeCategories[3],
    tags: ['bánh bao', 'chiên', 'snack', 'street food'],
    ingredients: [
      { id: '1', name: 'Bánh bao nhỏ', amount: '8', unit: 'cái' },
      { id: '2', name: 'Thịt heo xay', amount: '200', unit: 'g' },
      { id: '3', name: 'Trứng gà', amount: '2', unit: 'quả' },
      { id: '4', name: 'Bột chiên giòn', amount: '100', unit: 'g' },
      { id: '5', name: 'Dầu ăn', amount: '500', unit: 'ml' }
    ],
    instructions: [
      { id: '1', step: 1, description: 'Chuẩn bị nhân bánh bao với thịt xay', time: 20 },
      { id: '2', step: 2, description: 'Gói bánh bao với nhân', time: 15 },
      { id: '3', step: 3, description: 'Tẩm trứng và bột chiên giòn', time: 10 },
      { id: '4', step: 4, description: 'Chiên vàng đều trong dầu nóng', time: 8 }
    ],
    cookingTime: 53,
    servings: 4,
    difficulty: 'Trung bình',
    tips: 'Chiên với lửa vừa để bánh chín đều',
    story: 'Học được từ quán ăn vỉa hè và tự nghiên cứu để làm tại nhà.',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '5',
    title: 'Bánh Flan Caramel',
    slug: 'banh-flan-caramel',
    description: 'Bánh flan mịn màng với lớp caramel đắng ngọt hoàn hảo, tan chảy trong miệng',
    content: `
Những lần làm bánh flan luôn mang lại niềm vui đặc biệt...

## Câu chuyện của món ăn

Đây là món tráng miệng yêu thích của gia đình mình, đặc biệt trong những dịp cuối tuần.

## Nguyên liệu chính

- Trứng gà
- Sữa tươi
- Đường trắng
- Vanilla

## Mẹo của Lan

💡 Nấu caramel đến màu hổ phách đẹp mắt, không để quá đậm sẽ bị đắng.
    `,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
    category: recipeCategories[1],
    tags: ['flan', 'caramel', 'dessert', 'smooth'],
    ingredients: [
      { id: '1', name: 'Trứng gà', amount: '4', unit: 'quả' },
      { id: '2', name: 'Sữa tươi', amount: '400', unit: 'ml' },
      { id: '3', name: 'Đường trắng', amount: '120', unit: 'g' },
      { id: '4', name: 'Vanilla', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      { id: '1', step: 1, description: 'Nấu caramel đến màu hổ phách', time: 10 },
      { id: '2', step: 2, description: 'Trộn trứng với sữa và vanilla', time: 5 },
      { id: '3', step: 3, description: 'Lọc hỗn hợp để bánh mịn', time: 3 },
      { id: '4', step: 4, description: 'Hấp 25 phút với lửa nhỏ', time: 25 }
    ],
    cookingTime: 43,
    servings: 6,
    difficulty: 'Dễ',
    tips: 'Nấu caramel đến màu hổ phách, không để quá đậm',
    story: 'Món tráng miệng yêu thích của gia đình trong những dịp cuối tuần.',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '6',
    title: 'Cơm Tấm Sườn Nướng',
    slug: 'com-tam-suon-nuong',
    description: 'Cơm tấm thơm với sườn nướng mật ong, chả trứng và nước mắm chua ngọt',
    content: `
Cơm tấm sườn nướng - hương vị Sài Gòn đích thực...

## Câu chuyện của món ăn

Đây là món ăn mang đậm dấu ấn Sài Gòn mà mình luôn nhớ mỗi khi xa nhà.

## Nguyên liệu chính

- Cơm tấm
- Sườn non
- Mật ong
- Chả trứng

## Mẹo của Lan

💡 Ướp sườn qua đêm để thịt thấm đều gia vị, nướng than hồng để có mùi thơm đặc trưng.
    `,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800',
    category: recipeCategories[0],
    tags: ['cơm tấm', 'sườn nướng', 'Sài Gòn', 'BBQ'],
    ingredients: [
      { id: '1', name: 'Cơm tấm', amount: '2', unit: 'chén' },
      { id: '2', name: 'Sườn non', amount: '500', unit: 'g' },
      { id: '3', name: 'Mật ong', amount: '2', unit: 'tbsp' },
      { id: '4', name: 'Chả trứng', amount: '2', unit: 'lát' },
      { id: '5', name: 'Dưa leo', amount: '1', unit: 'quả' },
      { id: '6', name: 'Cà chua', amount: '1', unit: 'quả' }
    ],
    instructions: [
      { id: '1', step: 1, description: 'Ướp sườn với gia vị qua đêm', time: 480 },
      { id: '2', step: 2, description: 'Nướng sườn trên than hồng', time: 20 },
      { id: '3', step: 3, description: 'Chuẩn bị cơm tấm và chả trứng', time: 10 },
      { id: '4', step: 4, description: 'Bày đĩa với rau sống', time: 5 }
    ],
    cookingTime: 515,
    servings: 2,
    difficulty: 'Trung bình',
    tips: 'Ướp sườn qua đêm và nướng than hồng để thơm ngon',
    story: 'Món ăn mang đậm dấu ấn Sài Gòn mà mình luôn nhớ khi xa nhà.',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  }
] 