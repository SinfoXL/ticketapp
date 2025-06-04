import { User } from '../../modules/users/def.types';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
            };
        }
    }
}
