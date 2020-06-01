use DogsSearch
go

declare @story nvarchar(max) = '
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu est nec metus semper iaculis vulputate posuere mauris. Nulla odio enim, hendrerit ac metus ullamcorper, convallis aliquam sem. Vestibulum porta non mi in laoreet. In et lorem rhoncus, suscipit risus euismod, tristique ante. Donec volutpat ornare est eget pellentesque. Vivamus interdum, nulla at elementum rutrum, ante justo hendrerit dui, eu vehicula dui quam in nisl. Praesent ac purus aliquam enim auctor congue vel sed orci. Phasellus vestibulum, nisl at commodo blandit, ante odio pretium dui, in sagittis velit mauris at neque. Nulla facilisi. Vestibulum blandit ligula vel suscipit eleifend. Nulla eu ex erat. Etiam semper erat quam, a pharetra est consequat sed. Integer ullamcorper fermentum euismod.

Integer vitae consequat elit. Quisque convallis ex ut ex efficitur gravida. Nullam massa lacus, rhoncus non semper id, dictum quis mi. Mauris ullamcorper condimentum nunc eget tincidunt. Morbi hendrerit nunc dolor, eu lacinia lacus vulputate nec. Fusce luctus leo non diam ultricies gravida. Morbi sit amet urna tristique, aliquam nisi non, aliquam mi. Sed lobortis enim neque, vel tempor neque tincidunt et. Quisque elementum magna vel enim efficitur blandit. Donec semper luctus ligula. Donec massa tortor, aliquam non arcu eget, pretium iaculis mauris. Morbi sit amet fringilla leo. Sed porta scelerisque nunc in auctor. Morbi fringilla, ligula sed eleifend sagittis, libero mi lobortis magna, vitae egestas erat massa et mi.

Etiam tempus purus laoreet fringilla viverra. Aliquam sed blandit orci, eu lobortis lacus. Vivamus elementum congue sem eget rhoncus. Sed libero massa, interdum imperdiet rutrum non, aliquam nec elit. Fusce cursus purus nec varius rutrum. In scelerisque quis odio at aliquet. Praesent lacinia ultricies tempor.

Donec justo libero, dictum a auctor quis, pulvinar sit amet augue. Aliquam fermentum lacus magna, et sagittis est ullamcorper eu. Aenean non suscipit magna, vel pulvinar libero. Nunc pretium ornare gravida. Duis tincidunt metus nibh, sed vehicula est accumsan sed. In tempus bibendum orci nec venenatis. Sed interdum sagittis urna, vitae semper mauris rutrum eu. Sed placerat lacinia ante, at aliquet augue pellentesque vel.

Sed congue iaculis ex a tincidunt. Ut euismod feugiat lobortis. Nunc id lacus quis urna dapibus mollis nec non metus. In molestie ante id ornare volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent congue libero eu eros suscipit dapibus et id nunc. Sed eget laoreet dolor. Donec vitae imperdiet nisl, quis sollicitudin nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Donec a egestas augue. Fusce elementum risus nec mi blandit elementum. Nulla finibus nec mauris eleifend bibendum. Quisque sed lectus id odio malesuada consectetur. Sed fringilla venenatis purus et fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ac convallis nisi. Sed egestas est a nibh luctus, quis porta nisi pellentesque. Duis consequat dolor lectus, in pharetra est rutrum eget. Donec id varius purus. Nulla tempor non mi volutpat iaculis. Proin volutpat egestas maximus. Integer congue auctor diam, id bibendum nunc fermentum quis. Orci varius natoque penatibus et magnis.
'

delete from Dog where 1 = 1

insert into Dog
    (Name, Age, ImageURL, Gender, Story)
values
    ('Buddy', 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8Vbb9r4TfBmFq_p6iyMl6d45IMhB8HXXh-7ZoUmmQqwNLmBym&usqp=CAU', 'Male', @story)
    ,
    ('Cookie', 2, 'https://opt.toiimg.com/recuperator/img/toi/m-75084814/75084814.jpg&width=500&resizemode=4', 'Female', @story)
    ,
    ('Lucy', 9, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS29eOeWxM6SaR_-xwIEjtve3k7BiYTh2353JPBtyf0LMGaviy&usqp=CAU', 'Female', @story)
    ,
    ('Caesar', 6, 'https://www.aspca.org/sites/default/files/blog_make-dogs-day_101619_main.jpg', 'Male', @story)
    ,
    ('Dorie', 1, 'https://www.guidedogsvictoria.com.au/wp-content/themes/default/static/img/campaigns/tax-banner-2020/tax-banner-2020-mobile.jpg', 'Female', @story)
    ,
    ('Rex', 13, 'https://media4.s-nbcnews.com/i/newscms/2019_23/2885811/190606-border-collie-mc-1318_5b1706791f4ae9ddb3029540a98f7e08.JPG', 'Male', @story)