import { faker } from "@faker-js/faker";
export function fetchData(count = 30) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const item = {
      name: faker.random.word(),
      dob: faker.date.recent(),
      email: faker.internet.email(),
      phone: faker.phone.imei(),
      address: {
        city: faker.address.city(),
        street: faker.address.street(),
      },
      avatar: faker.internet.avatar(),
    };
    item.paragraph = faker.lorem.paragraph();
    item.img = {
      src: `${process.env.BASE_URL}/images/${faker.datatype.number({ min: 1, max: 20 })}.jpeg`,
      width: `${faker.datatype.number({ min: 100, max: 700 })}px`,
    };
    result.push(item);
  }
  return result;
}
