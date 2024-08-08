import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}

    @Post('token')
    async generateToken(@Body() body: any) {
        try {
            const token = await this.authService.generateToken(body);
            return {
                message: 'Token generated successfully',
                token
            }
        } catch (error) {
            throw new HttpException("Error generating token", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
