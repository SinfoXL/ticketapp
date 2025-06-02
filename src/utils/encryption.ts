//Functions to encryopt and decrypt data using bcrypt library
import bcrypt from 'bcrypt';

/**
 * Utility function to hash a password using bcrypt
 * @param password - The password to hash
 * @returns A promise that resolves to the hashed password
 */

export const hashPassword = async (password: string): Promise<string> => {
    const SALT_ROUNDS = 14; // You can adjust the number of salt rounds as needed
    return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Utility function to compare a password with a hashed password using bcrypt
 * @param password - The password to compare
 * @param hashedPassword - The hashed password to compare against
 * @returns A promise that resolves to true if the passwords match, false otherwise
 */

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};
