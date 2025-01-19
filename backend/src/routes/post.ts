import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@shrey_gangwar/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    };
    Variables: {
        userId: string;
    };
}>();

postRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
    if(user) {
        c.set('userId', user.id as string);
        await next();
    } else {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
    } catch (error) {
        c.status(403);
        return c.json({
            message: "you are not logged in"
        })
    }
})


postRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success } = createPostInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({
            message: "Inputs are not correct"
        })
    }

    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json({
        id: post.id
    })
})

postRouter.put('/', async (c) => {
    const body = await c.req.json();
    const {success} = updatePostInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Invalid update inputs"
        })
    } 
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const post = await prisma.post.update({
        where: {
            id: body.id
        },
         data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json({
        id: post.id
    })
})

// bulk upar krdiya before /:id end point to give it priority over the other end point.

//try pagination for only top 10 blogs
postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const postAll = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return c.json({
            postAll
        })
    } catch (error) {
        c.status(411);
        return c.json({
            message: "Problem in fetching posts"
        })
    }
})

postRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const post = await prisma.post.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        if(post) {
            return c.json({
                post
            })
        } else {
            c.status(404);
            return c.json({message: "post not found"})
        }
    } catch(e) {
        c.status(411);
        return c.json({
            message: "Post not found"
        })
    }
})