<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Livraison
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $idLivraison;

    #[ORM\Column(length: 255)]
    private ?string $dateLivraison;

    #[ORM\Column(length: 255)]
    private ?string $statutLivraison;

    #[ORM\Column(length: 255)]
    private ?string $adresseLivraison;

    #[ORM\Column]
    private ?float $montantPaiement;

    #[ORM\Column(length: 255)]
    private ?string $modeLivraison;

    #[ORM\ManyToOne(targetEntity: Commande::class, inversedBy: "livraisons")]
    private ?Commande $commande;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $client;

    public function getIdLivraison(): ?int
    {
        return $this->idLivraison;
    }

    public function setIdLivraison(?int $idLivraison): void
    {
        $this->idLivraison = $idLivraison;
    }

    public function getDateLivraison(): ?\DateTime
    {
        return $this->dateLivraison;
    }

    public function setDateLivraison(?\DateTime $dateLivraison): void
    {
        $this->dateLivraison = $dateLivraison;
    }

    public function getStatutLivraison(): ?string
    {
        return $this->statutLivraison;
    }

    public function setStatutLivraison(?string $statutLivraison): void
    {
        $this->statutLivraison = $statutLivraison;
    }

    public function getAdresseLivraison(): ?string
    {
        return $this->adresseLivraison;
    }

    public function setAdresseLivraison(?string $adresseLivraison): void
    {
        $this->adresseLivraison = $adresseLivraison;
    }

    public function getMontantPaiement(): ?float
    {
        return $this->montantPaiement;
    }

    public function setMontantPaiement(?float $montantPaiement): void
    {
        $this->montantPaiement = $montantPaiement;
    }

    public function getModeLivraison(): ?string
    {
        return $this->modeLivraison;
    }

    public function setModeLivraison(?string $modeLivraison): void
    {
        $this->modeLivraison = $modeLivraison;
    }

    public function getCommande(): ?Commande
    {
        return $this->commande;
    }

    public function setCommande(?Commande $commande): void
    {
        $this->commande = $commande;
    }

    public function getClient(): ?User
    {
        return $this->client;
    }

    public function setClient(?User $client): void
    {
        $this->client = $client;
    }
}
