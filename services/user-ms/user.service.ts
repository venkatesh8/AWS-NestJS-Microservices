@Injectable()
export class UsersService {
    private users: { username: string; password: string }[] = [];

    createUser(username: string, password: string) {
        const user = { username, password };
        this.users.push(user);
        return { message: 'User created', user };
    }

    validateUser(username: string, password: string) {
        return this.users.find(
            (user) => user.username === username && user.password === password,
        );
    }
}