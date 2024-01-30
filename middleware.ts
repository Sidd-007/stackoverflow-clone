import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/app/api/webhook',
        'question/:id',
        '/tags/:id',
        '/tags',
        '/profile/:id',
        '/community',
        '/jobs',
    ],
    ignoredRoutes: [
        '/app/api/webhook', '/api/chatgpt'
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
