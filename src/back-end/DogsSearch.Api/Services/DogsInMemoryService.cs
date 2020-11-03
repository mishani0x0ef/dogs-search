using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DogsSearch.Api.Services
{
    public class DogsInMemoryService : IDogsService
    {
        private List<Dog> _dogs;

        public DogsInMemoryService()
        {
            _dogs = new List<Dog>
            {
                new Dog
                {
                    DogId = Guid.NewGuid(),
                    Name = "Cookie",
                    Birthday = new DateTimeOffset(2019, 2, 22, 0, 0, 0, TimeSpan.FromHours(2)),
                    ImageUrl = "https://instagram.fiev9-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/117429720_962039777629996_7491874173927597759_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Y2an1UQHE4IAX-LlM_a&_nc_tp=15&oh=2f743b4eaf2d1df27410fbbc1122a557&oe=5F8A000B",
                    Gender = Gender.Female,
                    Story = @"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus, leo nec vulputate auctor, ligula dui tempus nisi, in convallis neque tortor at justo. Integer venenatis, metus ac tincidunt fermentum, lorem turpis placerat risus, a aliquet quam diam eu metus. Nullam interdum efficitur tellus sollicitudin varius. Donec libero est, consectetur viverra felis ac, tincidunt ornare ex. Nullam pellentesque arcu quis aliquam mattis. Aliquam erat volutpat. Praesent nulla ante, congue id orci sed, pretium mattis elit.
Proin sed ante ornare, malesuada lectus ut, semper odio. Nulla maximus nisi vel venenatis bibendum. Morbi pharetra, tortor quis convallis ultrices, eros nibh tempus nibh, ut suscipit magna sapien ac metus. Nullam laoreet nisl vitae purus porttitor, ac pulvinar lorem tincidunt. Nulla ut accumsan sapien. Mauris ac convallis augue. Etiam ultrices orci sit amet leo bibendum blandit. Etiam eleifend risus id odio tempus tempor. Morbi eu elit eu metus finibus rutrum. Cras eget venenatis felis. Nunc justo ex, finibus non mollis non, dapibus at ante.
Morbi quis sodales dui, at pellentesque est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Aliquam facilisis vehicula ultrices. Vestibulum placerat vestibulum diam ut eleifend. Cras mollis congue orci nec malesuada. Ut non ante nunc. Proin semper risus quam, sed dapibus tellus molestie ac. Praesent non magna at libero porttitor gravida et eget arcu. Sed erat arcu, ullamcorper vel sollicitudin vel, maximus consectetur massa. Maecenas ultricies ultricies lorem sollicitudin hendrerit.",
                    Location = null,
                    AdditionalImages = new List<string>
                    {
                        "https://instagram.fiev9-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/119126853_731795667402365_6148790481901985484_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=er_9_bn4s0wAX8m-Ovk&_nc_tp=15&oh=f353365e72d2bce4342d8a248b3c76af&oe=5F8AA8DA",
                        "https://instagram.fiev9-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/119184573_3508849595801027_177182118043572437_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=apDq06r1a3MAX-nBnzE&oh=35e9c1cce96efbab1346d00c555e6b8f&oe=5F8BB2A9",
                    },
                    IsAdopted = true
                },
                new Dog
                {
                    DogId = Guid.NewGuid(),
                    Name = "Sirco",
                    Birthday = new DateTimeOffset(2015, 2, 22, 0, 0, 0, TimeSpan.FromHours(2)),
                    ImageUrl = "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg",
                    Gender = Gender.Male,
                    Story = @"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus, leo nec vulputate auctor, ligula dui tempus nisi, in convallis neque tortor at justo. Integer venenatis, metus ac tincidunt fermentum, lorem turpis placerat risus, a aliquet quam diam eu metus. Nullam interdum efficitur tellus sollicitudin varius. Donec libero est, consectetur viverra felis ac, tincidunt ornare ex. Nullam pellentesque arcu quis aliquam mattis. Aliquam erat volutpat. Praesent nulla ante, congue id orci sed, pretium mattis elit.
Proin sed ante ornare, malesuada lectus ut, semper odio. Nulla maximus nisi vel venenatis bibendum. Morbi pharetra, tortor quis convallis ultrices, eros nibh tempus nibh, ut suscipit magna sapien ac metus. Nullam laoreet nisl vitae purus porttitor, ac pulvinar lorem tincidunt. Nulla ut accumsan sapien. Mauris ac convallis augue. Etiam ultrices orci sit amet leo bibendum blandit. Etiam eleifend risus id odio tempus tempor. Morbi eu elit eu metus finibus rutrum. Cras eget venenatis felis. Nunc justo ex, finibus non mollis non, dapibus at ante.
Morbi quis sodales dui, at pellentesque est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Aliquam facilisis vehicula ultrices. Vestibulum placerat vestibulum diam ut eleifend. Cras mollis congue orci nec malesuada. Ut non ante nunc. Proin semper risus quam, sed dapibus tellus molestie ac. Praesent non magna at libero porttitor gravida et eget arcu. Sed erat arcu, ullamcorper vel sollicitudin vel, maximus consectetur massa. Maecenas ultricies ultricies lorem sollicitudin hendrerit.",
                    Location = new Location(48.8954658, 24.7614244),
                    AdditionalImages = new List<string>(),
                    IsAdopted = false
                }
            };
        }

        public async Task Adopt(Guid id)
        {
            var dog = await GetById(id);

            if (dog is null)
                throw new KeyNotFoundException($"Dog with id '{id}' is not found.");

            if (dog.IsAdopted)
                throw new InvalidOperationException($"Cannot adopt dog with id '{id}', because it's already adopted.");
           
            dog.IsAdopted = true;
        }

        public Task<Guid> Create(Dog dog)
        {
            var id = Guid.NewGuid();
            dog.DogId = id;
            _dogs.Add(dog);
            return Task.FromResult(id);
        }

        public Task<IEnumerable<Dog>> Get()
        {
            return Task.FromResult(_dogs as IEnumerable<Dog>);
        }

        public Task<Dog> GetById(Guid id)
        {
            return Task.FromResult(_dogs.FirstOrDefault(d => d.DogId.Equals(id)));
        }

        public async Task RemoveById(Guid id)
        {
            var dog = await GetById(id);

            if(dog is null)
                throw new KeyNotFoundException($"Dog with id '{id}' is not found.");

            _dogs.Remove(dog);
        }
    }
}
