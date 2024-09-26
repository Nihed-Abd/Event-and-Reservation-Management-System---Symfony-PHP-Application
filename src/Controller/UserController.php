<?php

namespace App\Controller;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class UserController extends AbstractController
{
    #[Route('/user', name: 'app_user')]
    public function index(): Response
    {
        return $this->render('user/index.html.twig', [
            'Users' => 'UserController',
        ]);
    }
    #[Route('/readUser', name: 'readUser')]
    public function readUser(UserRepository $repo): Response
    {   $users=$repo->findAll();
        return $this->render('user/AfficherUser.html.twig', [
            'Users' => $users,
        ]);
    }
    #[Route('/Admin', name: 'Admin')]
    public function adminpage(UserRepository $repo): Response
    {   $users=$repo->findAll();
        return $this->render('user/Admin.html.twig', [
            'Users' => $users,
        ]);
    }
    #[Route('/homee', name: 'homee')]
    public function homeee(ManagerRegistry $manager,Request $request): Response
    { $user =new User();

        $form=$this->createForm(UserType::class,$user);
        $user->setBan(0);
        $user->setRole("Client");
        $user->setIdCodePromo(1);
        $form->handleRequest($request);
        //5

        if($form->isSubmitted() &&$form->isValid()){
            //6
            $imageFile = $form->get('image')->getData();

            // if($imageFile){
            $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$imageFile->guessExtension();
            try {
                $imageFile->move(
                    $this->getParameter('images'),
                    $newFilename
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }
            $user->setImage($newFilename);

            $em=$manager->getManager();
            //7
            $passwordcrybt = password_hash($user->getPassword(), PASSWORD_BCRYPT);
            $user->setPassword($passwordcrybt);
            $em->persist($user);
            $em->flush();
            //8
            return $this->redirectToRoute('readUser'); }
        return $this->renderForm('user/acceuil.html.twig',['formUser'=>$form]);

    }
    #[Route('/addUser', name: 'addUser')]
    public function addUser(ManagerRegistry $manager,Request $request): Response
    {   $user =new User();

        $form=$this->createForm(UserType::class,$user);
        $user->setBan(0);
        $user->setRole("Client");
        $user->setIdCodePromo(1);
        $form->handleRequest($request);
        //5

        if($form->isSubmitted() &&$form->isValid()){
            //6
            $imageFile = $form->get('image')->getData();

            // if($imageFile){
            $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$imageFile->guessExtension();
            try {
                $imageFile->move(
                    $this->getParameter('images'),
                    $newFilename
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }
            $user->setImage($newFilename);

            $em=$manager->getManager();
        //7
            $passwordcrybt = password_hash($user->getPassword(), PASSWORD_BCRYPT);
        $user->setPassword($passwordcrybt);
        $em->persist($user);
        $em->flush();
        //8
       return $this->redirectToRoute('readUser'); }
       return $this->renderForm('user/acceuil.html.twig',['formUser'=>$form]);
      
    }
    private $session;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }
    #[Route('/login', name: 'login')]

    public function login(AuthenticationUtils $authenticationUtils, UserPasswordEncoderInterface $passwordEncoder,ManagerRegistry $manager,Request $request,UserRepository $repo)
    {

        // Récupérez l'email et le mot de passe de l'utilisateur depuis le formulaire de connexion
        $email = $request->request->get('loginUsername');
        $password = $request->request->get('loginpass');

        // Récupérez l'utilisateur à partir de votre source de données (par exemple, la base de données)
        $user = $repo->findOneByEmail($email);

        if (!$user) {
            $this->session->getFlashBag()->add('error', 'L\'utilisateur n\'existe pas.');
            return $this->redirectToRoute('homee');
        }

        // Vérifiez le mot de passe en utilisant le PasswordEncoder
        if ($passwordEncoder->isPasswordValid($user, $password)) {
            if ($user->getBan()==0){
                if ($user->getRole()=="Client")
            {
                return $this->redirectToRoute('readUser', [
                    'User' => $user,
                ]);

            }
            elseif ($user->getRole()=="Admin"){
                return $this->redirectToRoute('Admin', [
                    'User' => $user,
                ]);
            }
            }
            else{
                $this->session->getFlashBag()->add('error', 'Votre compte est banée');
                return $this->redirectToRoute('homee');
            }

        } else {
            $this->session->getFlashBag()->add('error', 'L\'utilisateur n\'existe pas.');
            return $this->redirectToRoute('homee');

        }

        // ...
    }

}
